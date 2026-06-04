import{d as c,j as n,l as x,i as C,k as A,p as O,m as F,n as P,r as N}from"./iframe-DU6-gHk6.js";import{A as w}from"./Autocomplete-Br2L4xQB.js";import{a as z,A as W}from"./Avatar-DAJEZknH.js";import{a as G,F as V}from"./InputLabel-Bnixl784.js";import{F as $}from"./Flex-C-ZuU2xq.js";import{c as j}from"./create-toast-Bk21w6Tb.js";import{a as E}from"./Tooltip-3ve6LLZH.js";const K=["Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia","Cameroon","Canada","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo, Democratic Republic of the","Congo, Republic of the","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Korea, North","Korea, South","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Macedonia","Norway","Oman","Pakistan","Palau","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"],k=K.map((e,a)=>({label:e,value:a.toString()})),{userEvent:s,within:r}=__STORYBOOK_MODULE_TEST__,H={title:"Components/Autocomplete",component:w,argTypes:{onChange:{action:"changed"},onClear:{action:"changed"},showTooltips:{control:"boolean",description:"Whether to show tooltips on hover for option labels",table:{defaultValue:{summary:"false"}}},tooltipPosition:{control:"select",options:Object.values(E),description:"Tooltip position for option tooltips",table:{defaultValue:{summary:"TOP"}}}}},D="Autocomplete",_=[{value:"option1",label:"This is a very long option label that will be truncated and should show a tooltip on hover"},{value:"option2",label:"Another extremely long option label that demonstrates the tooltip functionality for truncated text"},{value:"option3",label:"A third option with an incredibly long label that will definitely be truncated in the dropdown"},{value:"option4",label:"Short option"},{value:"option5",label:"Another short option"}],l=(e,a,o)=>{j({title:"Toast notification",text:`the ${a} props has been called ${a==="onChange"?"with value ":""} ${o}`,variant:P.SUCCESS,displayCloseButton:!0,position:F.BOTTOM_CENTER,...e})},t={args:{id:"autocomplete",label:D,placeholder:"Type something",state:V.DEFAULT,inverse:!1,disabled:!1,required:!1,size:G.LARGE,options:k,onChange:()=>{},onClear:()=>{}},play:async({canvasElement:e})=>{const a=r(e);await s.click(a.getByLabelText(D,{exact:!1}))},render:e=>n.jsxs(n.Fragment,{children:[n.jsx(x,{}),n.jsx(w,{...e,onChange:a=>{l(e,"onChange",a.target.value)},onClear:()=>{l(e,"onClear","")}})]})},p={args:{...t.args,multiple:!0,maxInputLines:5},play:t.play},Y=e=>{const[a,o]=N.useState(["1","2","3"]);return n.jsxs(n.Fragment,{children:[n.jsx(x,{}),n.jsx(w,{...e,onChange:i=>{l(e,"onChange",i.target.value),o(i.target.value)},value:a,onClear:()=>{l(e,"onClear","")}})]})},u={args:{...t.args,chipsOutside:!0,multiple:!0,allowCustomValues:!0},render:e=>n.jsx(Y,{...e})},d={args:{...t.args,freeSolo:!0},play:t.play,render:e=>{const a=(o,i,U)=>{j({title:"Toast notification",text:`the ${i} props has been called ${i==="onChange"?"with value ":""} ${U}`,variant:P.SUCCESS,displayCloseButton:!0,position:F.BOTTOM_CENTER,...o})};return n.jsxs(n.Fragment,{children:[n.jsx(x,{}),n.jsx(w,{...e,onChange:o=>{a(e,"onChange",o.target.value)},onClear:()=>{a(e,"onClear","")}})]})}},h={args:{...t.args,options:_,showTooltips:!0,tooltipPosition:E.TOP},play:t.play,parameters:{docs:{description:{story:"Example of an Autocomplete with tooltips enabled. Hover over the long option labels to see the full text in a tooltip."}}}},m={args:{...t.args,options:_,multiple:!0,maxInputLines:3,showTooltips:!0,tooltipPosition:E.TOP},play:t.play,parameters:{docs:{description:{story:"Example of a multiple selection Autocomplete with tooltips enabled. Hover over the long option labels to see the full text in a tooltip."}}}};function R(e,a=800){return new Promise(o=>{setTimeout(()=>{o(k.filter(i=>i.label.toLowerCase().startsWith(e.toLowerCase())))},a)})}function q(e){return new Promise((a,o)=>{setTimeout(()=>{o(new Error("Network error: unable to reach server"))},800)})}const M=e=>n.jsxs(n.Fragment,{children:[n.jsx(x,{}),n.jsx(w,{...e,onChange:a=>l(e,"onChange",a.target.value),onClear:()=>l(e,"onClear","")})]}),g={args:{...t.args,id:"autocomplete-async",label:"Search Countries (Async)",placeholder:"Type something",options:[],onAsyncSearch:R,debounceDelay:300},play:async({canvasElement:e,args:a})=>{const o=r(e);await s.click(o.getByLabelText(a.label,{exact:!1}))},render:e=>n.jsx(M,{...e}),parameters:{docs:{description:{story:"Uses `onAsyncSearch` so the component handles debouncing, loading, and error states internally. Results are fetched after a 300ms debounce delay with a simulated 800ms network latency."}}}},y={args:{...t.args,id:"autocomplete-async-multiple",label:"Search Countries (Async Multiple)",placeholder:"Type something",multiple:!0,maxInputLines:3,options:[],onAsyncSearch:R,debounceDelay:300},play:async({canvasElement:e,args:a})=>{const o=r(e);await s.click(o.getByLabelText(a.label,{exact:!1}))},render:e=>n.jsx(M,{...e}),parameters:{docs:{description:{story:"Uses `onAsyncSearch` with `multiple` selection. The component handles all async state internally."}}}},b={args:{...t.args,id:"autocomplete-async-error",label:"Search Countries (Async Error)",placeholder:"Type something",options:[],onAsyncSearch:q,debounceDelay:300,errorMessageI18n:"Failed to fetch results. Please try again."},play:async({canvasElement:e,args:a})=>{const o=r(e);await s.click(o.getByLabelText(a.label,{exact:!1}))},render:e=>n.jsx(M,{...e}),parameters:{docs:{description:{story:"Demonstrates the error state when an async fetch fails. Every search request is rejected, showing the error message in the dropdown. Clearing the input resets the error."}}}},B=[{value:"cgn_sdmf",label:"Solida Manufacturing",description:"CGN_SDMF"},{value:"fra_l20",label:"ICF H600",description:"FRA_L20"},{value:"fra_0l12",label:"FF NAPA, M47 Filling",description:"FRA_0L12_FIL047"},{value:"fra_m22",label:"Sanofi Pasteur Lyon",description:"FRA_M22_SPL"},{value:"us_swf1",label:"Swiftwater Plant",description:"US_SWF1"}],v={args:{...t.args,id:"autocomplete-description",label:"Location",placeholder:"Please select a location",options:B},play:async({canvasElement:e})=>{const a=r(e);await s.click(a.getByLabelText("Location",{exact:!1}))},parameters:{docs:{description:{story:"Options with a `description` field automatically display a subtitle below the label. This uses the built-in Menu.Item description rendering — no `renderOption` needed."}}}},S={args:{...t.args,id:"autocomplete-description-multi",label:"Locations",placeholder:"Select locations",options:B,multiple:!0,maxInputLines:3},play:async({canvasElement:e})=>{const a=r(e);await s.click(a.getByLabelText("Locations",{exact:!1}))},parameters:{docs:{description:{story:"Multi-select autocomplete with option descriptions. Each checkbox item shows the description below its label."}}}},T={args:{...t.args,id:"autocomplete-render-option",label:"Location",placeholder:"Search locations...",options:B,renderOption:(e,{highlightedLabel:a})=>n.jsxs(n.Fragment,{children:[n.jsx("div",{children:a}),n.jsx(C,{variant:O.BODY_SMALL,color:A.SUBTLE,children:e.description})]})},play:async({canvasElement:e})=>{const a=r(e);await s.click(a.getByLabelText("Location",{exact:!1}))},parameters:{docs:{description:{story:"Uses `renderOption` to fully customize option rendering. The `highlightedLabel` in the state object provides the label with search characters highlighted in bold."}}}},I=[{value:"u1",label:"Alice Martin",description:"Engineering",image:`${c}/images/avatars/avatar-0.png`},{value:"u2",label:"Bob Chen",description:"Design",image:`${c}/images/avatars/avatar-1.png`},{value:"u3",label:"Clara Dupont",description:"Product",image:`${c}/images/avatars/avatar-2.png`},{value:"u4",label:"David Kim",description:"Engineering",image:`${c}/images/avatars/avatar-3.png`},{value:"u5",label:"Eva Schmidt",description:"Marketing",image:`${c}/images/avatars/avatar-0.png`}],f={args:{...t.args,id:"autocomplete-render-custom",label:"Assign to",placeholder:"Search team members...",options:I,renderOption:(e,{highlightedLabel:a})=>{const o=e;return n.jsxs($,{align:"center",gap:"xs",children:[n.jsx(z,{name:o.label,image:o.image,size:W.XSMALL}),n.jsxs("div",{children:[n.jsx("div",{children:a}),n.jsx(C,{variant:O.BODY_SMALL,color:A.SUBTLE,children:o.description})]})]})}},play:async({canvasElement:e})=>{const a=r(e);await s.click(a.getByLabelText("Assign to",{exact:!1}))},parameters:{docs:{description:{story:"Demonstrates a richer custom layout with `renderOption` — each option shows an Avatar with a profile photo, the highlighted name, and a department subtitle."}}}},L={args:{...t.args,id:"autocomplete-render-multi",label:"Team Members",placeholder:"Search team members...",options:I,multiple:!0,maxInputLines:3,renderOption:(e,{highlightedLabel:a})=>n.jsxs(n.Fragment,{children:[n.jsx("div",{children:a}),n.jsx(C,{variant:O.BODY_SMALL,color:A.SUBTLE,children:e.description})]})},play:async({canvasElement:e})=>{const a=r(e);await s.click(a.getByLabelText("Team Members",{exact:!1}))},parameters:{docs:{description:{story:"Multi-select with `renderOption`. Checkbox items render custom content while retaining all selection behavior."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    id: "autocomplete",
    label,
    placeholder: "Type something",
    state: FormControlState.DEFAULT,
    inverse: false,
    disabled: false,
    required: false,
    size: InputSize.LARGE,
    options: testOptions,
    onChange: () => {},
    onClear: () => {}
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByLabelText(label, {
      exact: false
    }));
  },
  render: args => {
    return <>
        <Toast />
        <Autocomplete {...args} onChange={e => {
        notify(args as Partial<ToastOptions>, "onChange", e.target.value as string);
      }} onClear={() => {
        notify(args as Partial<ToastOptions>, "onClear", "");
      }} />
      </>;
  }
}`,...t.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    multiple: true,
    maxInputLines: 5
  },
  play: Default.play
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    chipsOutside: true,
    multiple: true,
    allowCustomValues: true
  },
  render: args => <DisplayChipsOutside {...args} />
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    freeSolo: true
  },
  play: Default.play,
  render: args => {
    const notify = (args: Partial<ToastOptions>, cb: string, value: string) => {
      createToast({
        title: "Toast notification",
        text: \`the \${cb} props has been called \${cb === "onChange" ? "with value " : ""} \${value}\`,
        variant: ToastVariant.SUCCESS,
        displayCloseButton: true,
        position: ToastPosition.BOTTOM_CENTER,
        ...args
      });
    };
    return <>
        <Toast />
        <Autocomplete {...args} onChange={e => {
        notify(args as Partial<ToastOptions>, "onChange", e.target.value as string);
      }} onClear={() => {
        notify(args as Partial<ToastOptions>, "onClear", "");
      }} />
      </>;
  }
}`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    options: longLabelOptions,
    showTooltips: true,
    tooltipPosition: TooltipPosition.TOP
  },
  play: Default.play,
  parameters: {
    docs: {
      description: {
        story: "Example of an Autocomplete with tooltips enabled. Hover over the long option labels to see the full text in a tooltip."
      }
    }
  }
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    options: longLabelOptions,
    multiple: true,
    maxInputLines: 3,
    showTooltips: true,
    tooltipPosition: TooltipPosition.TOP
  },
  play: Default.play,
  parameters: {
    docs: {
      description: {
        story: "Example of a multiple selection Autocomplete with tooltips enabled. Hover over the long option labels to see the full text in a tooltip."
      }
    }
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "autocomplete-async",
    label: "Search Countries (Async)",
    placeholder: "Type something",
    options: [],
    onAsyncSearch: simulateAsyncFetch,
    debounceDelay: 300
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByLabelText(args.label as string, {
      exact: false
    }));
  },
  render: args => <AsyncSearchStory {...args} />,
  parameters: {
    docs: {
      description: {
        story: "Uses \`onAsyncSearch\` so the component handles debouncing, loading, and error states internally. " + "Results are fetched after a 300ms debounce delay with a simulated 800ms network latency."
      }
    }
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "autocomplete-async-multiple",
    label: "Search Countries (Async Multiple)",
    placeholder: "Type something",
    multiple: true,
    maxInputLines: 3,
    options: [],
    onAsyncSearch: simulateAsyncFetch,
    debounceDelay: 300
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByLabelText(args.label as string, {
      exact: false
    }));
  },
  render: args => <AsyncSearchStory {...args} />,
  parameters: {
    docs: {
      description: {
        story: "Uses \`onAsyncSearch\` with \`multiple\` selection. The component handles all async state internally."
      }
    }
  }
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "autocomplete-async-error",
    label: "Search Countries (Async Error)",
    placeholder: "Type something",
    options: [],
    onAsyncSearch: simulateFailingFetch,
    debounceDelay: 300,
    errorMessageI18n: "Failed to fetch results. Please try again."
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByLabelText(args.label as string, {
      exact: false
    }));
  },
  render: args => <AsyncSearchStory {...args} />,
  parameters: {
    docs: {
      description: {
        story: "Demonstrates the error state when an async fetch fails. " + "Every search request is rejected, showing the error message in the dropdown. " + "Clearing the input resets the error."
      }
    }
  }
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "autocomplete-description",
    label: "Location",
    placeholder: "Please select a location",
    options: locationOptions
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByLabelText("Location", {
      exact: false
    }));
  },
  parameters: {
    docs: {
      description: {
        story: "Options with a \`description\` field automatically display a subtitle below the label. " + "This uses the built-in Menu.Item description rendering — no \`renderOption\` needed."
      }
    }
  }
}`,...v.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "autocomplete-description-multi",
    label: "Locations",
    placeholder: "Select locations",
    options: locationOptions,
    multiple: true,
    maxInputLines: 3
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByLabelText("Locations", {
      exact: false
    }));
  },
  parameters: {
    docs: {
      description: {
        story: "Multi-select autocomplete with option descriptions. " + "Each checkbox item shows the description below its label."
      }
    }
  }
}`,...S.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "autocomplete-render-option",
    label: "Location",
    placeholder: "Search locations...",
    options: locationOptions,
    renderOption: (option: Option, {
      highlightedLabel
    }: {
      highlightedLabel: ReactNode;
    }) => <>
        <div>{highlightedLabel}</div>
        <Typography variant={TypographyVariant.BODY_SMALL} color={TypographyColor.SUBTLE}>
          {option.description}
        </Typography>
      </>
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByLabelText("Location", {
      exact: false
    }));
  },
  parameters: {
    docs: {
      description: {
        story: "Uses \`renderOption\` to fully customize option rendering. " + "The \`highlightedLabel\` in the state object provides the label " + "with search characters highlighted in bold."
      }
    }
  }
}`,...T.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "autocomplete-render-custom",
    label: "Assign to",
    placeholder: "Search team members...",
    options: userOptions,
    renderOption: (option: Option, {
      highlightedLabel
    }: {
      highlightedLabel: ReactNode;
    }) => {
      const userOpt = option as UserOption;
      return <Flex align="center" gap="xs">
          <Avatar name={userOpt.label} image={userOpt.image} size={AvatarSize.XSMALL} />
          <div>
            <div>{highlightedLabel}</div>
            <Typography variant={TypographyVariant.BODY_SMALL} color={TypographyColor.SUBTLE}>
              {userOpt.description}
            </Typography>
          </div>
        </Flex>;
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByLabelText("Assign to", {
      exact: false
    }));
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstrates a richer custom layout with \`renderOption\` — " + "each option shows an Avatar with a profile photo, the highlighted name, and a department subtitle."
      }
    }
  }
}`,...f.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "autocomplete-render-multi",
    label: "Team Members",
    placeholder: "Search team members...",
    options: userOptions,
    multiple: true,
    maxInputLines: 3,
    renderOption: (option: Option, {
      highlightedLabel
    }: {
      highlightedLabel: ReactNode;
    }) => <>
        <div>{highlightedLabel}</div>
        <Typography variant={TypographyVariant.BODY_SMALL} color={TypographyColor.SUBTLE}>
          {option.description}
        </Typography>
      </>
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByLabelText("Team Members", {
      exact: false
    }));
  },
  parameters: {
    docs: {
      description: {
        story: "Multi-select with \`renderOption\`. Checkbox items render custom content " + "while retaining all selection behavior."
      }
    }
  }
}`,...L.parameters?.docs?.source}}};const J=["Default","Multiple","ChipsOutside","FreeSolo","WithTooltips","WithTooltipsMultiple","AsyncSearch","AsyncSearchMultiple","AsyncSearchError","WithDescription","WithDescriptionMultiple","WithRenderOption","WithRenderOptionCustomLayout","WithRenderOptionMultiple"],oe=Object.freeze(Object.defineProperty({__proto__:null,AsyncSearch:g,AsyncSearchError:b,AsyncSearchMultiple:y,ChipsOutside:u,Default:t,FreeSolo:d,Multiple:p,WithDescription:v,WithDescriptionMultiple:S,WithRenderOption:T,WithRenderOptionCustomLayout:f,WithRenderOptionMultiple:L,WithTooltips:h,WithTooltipsMultiple:m,__namedExportsOrder:J,default:H},Symbol.toStringTag,{value:"Module"}));export{oe as A,t as D,d as F,h as W,g as a,y as b,b as c,v as d,S as e,T as f,f as g,L as h};

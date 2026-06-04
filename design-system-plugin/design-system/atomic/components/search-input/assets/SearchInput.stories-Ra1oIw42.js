import{j as e,l as I,n as i,H as g,I as x,f as T,B as v,m as E}from"./iframe-DU6-gHk6.js";import{S as c,a as r}from"./SearchInput-C8GECqwm.js";import{a as s,F as o}from"./InputLabel-Bnixl784.js";import{B as U}from"./ButtonIcon-B-F3gh4N.js";import{c as f}from"./create-toast-Bk21w6Tb.js";const y={title:"Components/SearchInput",component:r,argTypes:{variant:{description:"Variant of the search input",control:"select",options:Object.values(c)},size:{description:"Size of the input",control:"select",options:Object.values(s)}},args:{label:"Search"}},n=({text:t,variant:a=i.SUCCESS})=>{f({title:"Notification",text:`The ${t} props is called.`,variant:a,displayCloseButton:!0,position:E.TOP_CENTER})},l={args:{placeholder:"Type in to search",inverse:!1,disabled:!1,state:o.DEFAULT,type:"text",size:s.MEDIUM,"aria-label":"Search",ariaClearInputLabel:"Clear input"},render:t=>e.jsxs(e.Fragment,{children:[e.jsx(I,{}),e.jsx(r,{...t})]})},S={decorators:[t=>e.jsx("div",{style:{padding:"20px",background:"black"},children:e.jsx(t,{})})],args:{placeholder:"Type in to search",inverse:!0,"aria-label":"Search"}},u={args:{placeholder:"Type in to search",state:o.ERROR,size:"medium",subText:"This is an error message","aria-label":"Search"}},h={render:t=>e.jsxs("div",{style:{display:"flex",alignItems:"flex-end",gap:"24px"},children:[e.jsx(r,{placeholder:"Medium",state:o.DEFAULT,size:s.MEDIUM}),e.jsx(r,{placeholder:"Large",state:o.DEFAULT,size:s.LARGE})]})},p={args:{placeholder:"Type in to search","aria-label":"Search",state:o.DEFAULT,disabled:!0,onChange:()=>n({text:"onChange"}),onClear:()=>n({text:"onClear"})}},d={args:{variant:c.SUBMIT,placeholder:"Type in to search",inverse:!1,disabled:!1,state:o.DEFAULT,type:"text",size:s.MEDIUM,"aria-label":"Search",ariaClearInputLabel:"Clear input",ariaSubmitLabel:"Submit search"},render:t=>e.jsxs(e.Fragment,{children:[e.jsx(I,{}),e.jsx(r,{...t,onSearch:a=>n({text:`onSearch with value: "${a}"`,variant:i.SUCCESS})})]})},m={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(I,{}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:"24px"},children:[e.jsx(r,{variant:c.SUBMIT,placeholder:"Small",state:o.DEFAULT,size:s.SMALL,onSearch:a=>n({text:`Medium onSearch: "${a}"`,variant:i.SUCCESS})}),e.jsx(r,{variant:c.SUBMIT,placeholder:"Medium",state:o.DEFAULT,size:s.MEDIUM,onSearch:a=>n({text:`Medium onSearch: "${a}"`,variant:i.SUCCESS})}),e.jsx(r,{variant:c.SUBMIT,placeholder:"Large",state:o.DEFAULT,size:s.LARGE,onSearch:a=>n({text:`Large onSearch: "${a}"`,variant:i.SUCCESS})})]})]})},b={args:{variant:c.SUBMIT,placeholder:"Search with custom icon",state:o.DEFAULT,size:s.MEDIUM,"aria-label":"Search with custom icon",ariaClearInputLabel:"Clear input",ariaSubmitLabel:"Submit search"},render:t=>e.jsxs(e.Fragment,{children:[e.jsx(I,{}),e.jsx(r,{...t,iconAfter:e.jsx(g,{name:x.VISIBILITY}),onSearch:a=>n({text:`onSearch with custom icon: "${a}"`,variant:i.SUCCESS})})]})},C={args:{variant:c.SUBMIT,placeholder:"Search",state:o.DEFAULT,size:s.MEDIUM,"aria-label":"Search with custom button",ariaClearInputLabel:"Clear input"},render:t=>e.jsxs(e.Fragment,{children:[e.jsx(I,{}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:"24px"},children:[e.jsx(r,{...t,submitButton:e.jsx(T,{label:"Search",onClick:()=>n({text:"Custom ButtonIcon clicked!",variant:i.SUCCESS}),"aria-label":"Search with arrow"}),onSearch:a=>n({text:`onSearch with custom button: "${a}"`,variant:i.SUCCESS})}),e.jsx(r,{...t,size:s.LARGE,submitButton:e.jsx(U,{icon:x.ARROW_FORWARD,onClick:()=>n({text:"Submit button clicked!",variant:i.SUCCESS}),"aria-label":"Search submit button",size:v.LARGE}),onChange:()=>n({text:"onChange"}),onClear:()=>n({text:"onClear"}),onSearch:a=>n({text:`onSearch with arrow button: "${a}"`,variant:i.SUCCESS})})]})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Type in to search",
    inverse: false,
    disabled: false,
    state: FormControlState.DEFAULT,
    type: "text",
    size: InputSize.MEDIUM,
    ["aria-label"]: "Search",
    ariaClearInputLabel: "Clear input"
  },
  render: args => {
    return <>
        <Toast />
        <SearchInput {...args} />
      </>;
  }
}`,...l.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    padding: "20px",
    background: "black"
  }}>
        <Story />
      </div>],
  args: {
    placeholder: "Type in to search",
    inverse: true,
    ["aria-label"]: "Search"
  }
}`,...S.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Type in to search",
    state: FormControlState.ERROR,
    size: "medium",
    subText: "This is an error message",
    ["aria-label"]: "Search"
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  /**
   * This is a hack to have a good display of the code in the storybook
   * cf github issue https://github.com/storybookjs/storybook/issues/23248
   */

  render: _args => {
    return <div style={{
      display: "flex",
      alignItems: "flex-end",
      gap: "24px"
    }}>
        <SearchInput placeholder="Medium" state={FormControlState.DEFAULT} size={InputSize.MEDIUM} />
        <SearchInput placeholder="Large" state={FormControlState.DEFAULT} size={InputSize.LARGE} />
      </div>;
  }
}`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Type in to search",
    ["aria-label"]: "Search",
    state: FormControlState.DEFAULT,
    disabled: true,
    onChange: () => notify({
      text: "onChange"
    }),
    onClear: () => notify({
      text: "onClear"
    })
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: SearchInputVariant.SUBMIT,
    placeholder: "Type in to search",
    inverse: false,
    disabled: false,
    state: FormControlState.DEFAULT,
    type: "text",
    size: InputSize.MEDIUM,
    ["aria-label"]: "Search",
    ariaClearInputLabel: "Clear input",
    ariaSubmitLabel: "Submit search"
  },
  render: args => {
    return <>
        <Toast />
        <SearchInput {...args} onSearch={value => notify({
        text: \`onSearch with value: "\${value}"\`,
        variant: ToastVariant.SUCCESS
      })} />
      </>;
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  /**
   * This is a hack to have a good display of the code in the storybook
   * cf github issue https://github.com/storybookjs/storybook/issues/23248
   */

  render: _args => {
    return <>
        <Toast />
        <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "24px"
      }}>
          <SearchInput variant={SearchInputVariant.SUBMIT} placeholder="Small" state={FormControlState.DEFAULT} size={InputSize.SMALL} onSearch={value => notify({
          text: \`Medium onSearch: "\${value}"\`,
          variant: ToastVariant.SUCCESS
        })} />
          <SearchInput variant={SearchInputVariant.SUBMIT} placeholder="Medium" state={FormControlState.DEFAULT} size={InputSize.MEDIUM} onSearch={value => notify({
          text: \`Medium onSearch: "\${value}"\`,
          variant: ToastVariant.SUCCESS
        })} />
          <SearchInput variant={SearchInputVariant.SUBMIT} placeholder="Large" state={FormControlState.DEFAULT} size={InputSize.LARGE} onSearch={value => notify({
          text: \`Large onSearch: "\${value}"\`,
          variant: ToastVariant.SUCCESS
        })} />
        </div>
      </>;
  }
}`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: SearchInputVariant.SUBMIT,
    placeholder: "Search with custom icon",
    state: FormControlState.DEFAULT,
    size: InputSize.MEDIUM,
    ["aria-label"]: "Search with custom icon",
    ariaClearInputLabel: "Clear input",
    ariaSubmitLabel: "Submit search"
  },
  render: args => {
    return <>
        <Toast />
        <SearchInput {...args} iconAfter={<Icon name={IconName.VISIBILITY} />} onSearch={value => notify({
        text: \`onSearch with custom icon: "\${value}"\`,
        variant: ToastVariant.SUCCESS
      })} />
      </>;
  }
}`,...b.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    variant: SearchInputVariant.SUBMIT,
    placeholder: "Search",
    state: FormControlState.DEFAULT,
    size: InputSize.MEDIUM,
    ["aria-label"]: "Search with custom button",
    ariaClearInputLabel: "Clear input"
  },
  render: args => {
    return <>
        <Toast />
        <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "24px"
      }}>
          <SearchInput {...args} submitButton={<Button label="Search" onClick={() => notify({
          text: "Custom ButtonIcon clicked!",
          variant: ToastVariant.SUCCESS
        })} aria-label="Search with arrow" />} onSearch={value => notify({
          text: \`onSearch with custom button: "\${value}"\`,
          variant: ToastVariant.SUCCESS
        })} />
          <SearchInput {...args} size={InputSize.LARGE} submitButton={<ButtonIcon icon={IconName.ARROW_FORWARD} onClick={() => notify({
          text: "Submit button clicked!",
          variant: ToastVariant.SUCCESS
        })} aria-label="Search submit button" size={ButtonSize.LARGE} />} onChange={() => notify({
          text: "onChange"
        })} onClear={() => notify({
          text: "onClear"
        })} onSearch={value => notify({
          text: \`onSearch with arrow button: "\${value}"\`,
          variant: ToastVariant.SUCCESS
        })} />
        </div>
      </>;
  }
}`,...C.parameters?.docs?.source}}};const L=["Default","Inverse","ErrorState","Sizes","Disabled","SubmitVariant","SubmitVariantSizes","SubmitWithButtonIcon","SubmitWithCustomButtons"],A=Object.freeze(Object.defineProperty({__proto__:null,Default:l,Disabled:p,ErrorState:u,Inverse:S,Sizes:h,SubmitVariant:d,SubmitVariantSizes:m,SubmitWithButtonIcon:b,SubmitWithCustomButtons:C,__namedExportsOrder:L,default:y},Symbol.toStringTag,{value:"Module"}));export{l as D,A as S,d as a,b};

import{j as e,l as m,f as T,V as d,n,m as v}from"./iframe-DU6-gHk6.js";import{c as b}from"./create-toast-Bk21w6Tb.js";const{userEvent:f,within:y}=__STORYBOOK_MODULE_TEST__,S={title:"Components/Toast",argTypes:{title:{type:"string",description:"Title of the Toast"},text:{type:"string",description:"Subtitle of the Toast"},variant:{description:"Variant",control:"select",options:Object.values(n)},displayCloseButton:{type:"boolean",description:"Display Close button"},position:{description:"Position",control:"select",options:Object.values(v)},duration:{control:"number",description:"Duration of the Toast. Set to Infinite to make a non-dismissible Toast"},actions:{control:"object",description:"Display one or two actions on the Toast"},offset:{control:"number",defaultValue:0,description:"Offset for the Toast"}}},s={render:t=>{const a=()=>{b({title:"A Toast was successfully created.",variant:n.SUCCESS,displayCloseButton:!0,offset:t.offset,...t})};return e.jsxs(e.Fragment,{children:[e.jsx(m,{}),e.jsx(T,{label:"Notify",onClick:a,"data-testid":"button"})]})},play:async({canvasElement:t})=>{const a=y(t);await f.click(a.getByTestId("button"))}},o={render:t=>e.jsx(d,{duration:1/0,createdAt:Date.now(),visible:!0,id:"id",title:"Toast title",text:"This is a helper text",variant:n.SUCCESS,actions:[{label:"Confirm"}],...t}),tags:["isHidden"]},i={render:t=>e.jsx(d,{duration:1/0,createdAt:Date.now(),visible:!0,id:"id",title:"Toast title",variant:n.SUCCESS,actions:[{label:"Confirm"}],...t}),tags:["isHidden"]},r={render:t=>e.jsx(d,{duration:1/0,createdAt:Date.now(),visible:!0,id:"id",title:"Toast title",variant:n.SUCCESS,actions:[{label:"Confirm"},{label:"Dismiss"}],...t}),tags:["isHidden"]},l={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10},children:Object.values(n).map(t=>e.jsx(d,{duration:1/0,createdAt:Date.now(),visible:!0,id:"id",text:`This is a ${t} toast.`,variant:t},t))})},c={render:t=>{const a=u=>()=>{b({text:"A Toast was successfully created.",variant:n.SUCCESS,displayCloseButton:!0,actions:u,...t})};return e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(m,{}),e.jsx(T,{label:"Single","data-testid":"button-single",onClick:a([{label:"Confirm",onClick:(u,p)=>{p()}}])}),e.jsx(T,{label:"Double","data-testid":"button-double",onClick:a([{label:"Confirm"},{label:"Dismiss",onClick:(u,p)=>{p()}}])})]})},play:async({canvasElement:t})=>{const a=y(t);await f.click(a.getByTestId("button-single")),await f.click(a.getByTestId("button-double"))}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => {
    const notify = () => {
      createToast({
        title: "A Toast was successfully created.",
        variant: ToastVariant.SUCCESS,
        displayCloseButton: true,
        offset: args.offset,
        ...args
      });
    };
    return <>
        <Toast />
        <Button label="Notify" onClick={notify} data-testid="button" />
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId("button"));
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: (props: ToastOptions) => <ToastBar duration={Infinity} createdAt={Date.now()} visible={true} id={"id"} title={"Toast title"} text={"This is a helper text"} variant={ToastVariant.SUCCESS} actions={[{
    label: "Confirm"
  }]} {...props} />,
  tags: ["isHidden"]
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: (props: ToastOptions) => <ToastBar duration={Infinity} createdAt={Date.now()} visible={true} id={"id"} title={"Toast title"} variant={ToastVariant.SUCCESS} actions={[{
    label: "Confirm"
  }]} {...props} />,
  tags: ["isHidden"]
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: (props: ToastOptions) => <ToastBar duration={Infinity} createdAt={Date.now()} visible={true} id={"id"} title={"Toast title"} variant={ToastVariant.SUCCESS} actions={[{
    label: "Confirm"
  }, {
    label: "Dismiss"
  }]} {...props} />,
  tags: ["isHidden"]
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 10
  }}>
      {Object.values(ToastVariant).map(variant => <ToastBar key={variant} duration={Infinity} createdAt={Date.now()} visible={true} id={"id"} text={\`This is a \${variant} toast.\`} variant={variant} />)}
    </div>
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => {
    const notify = (actions: ToastType["actions"]) => () => {
      createToast({
        text: "A Toast was successfully created.",
        variant: ToastVariant.SUCCESS,
        displayCloseButton: true,
        actions,
        ...args
      });
    };
    return <div style={{
      display: "flex",
      gap: 8
    }}>
        <Toast />
        <Button label="Single" data-testid="button-single" onClick={notify([{
        label: "Confirm",
        onClick: (_evt, closeToast) => {
          closeToast();
        }
      }])} />
        <Button label="Double" data-testid="button-double" onClick={notify([{
        label: "Confirm"
      }, {
        label: "Dismiss",
        onClick: (_evt, closeToast) => {
          closeToast();
        }
      }])} />
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId("button-single"));
    await userEvent.click(canvas.getByTestId("button-double"));
  }
}`,...c.parameters?.docs?.source}}};const C=["Default","Example","SingleAction","DualAction","ToastStatuses","ToastWithButtons"],D=Object.freeze(Object.defineProperty({__proto__:null,Default:s,DualAction:r,Example:o,SingleAction:i,ToastStatuses:l,ToastWithButtons:c,__namedExportsOrder:C,default:S},Symbol.toStringTag,{value:"Module"}));export{s as D,o as E,i as S,D as T,r as a};

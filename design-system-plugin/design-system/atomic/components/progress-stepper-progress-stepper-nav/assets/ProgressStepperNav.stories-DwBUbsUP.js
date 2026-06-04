import{r as P,j as e,H as C,I as z,i as u,p as N,o as _,f as w}from"./iframe-DU6-gHk6.js";const b=P.createContext(void 0);try{b.displayName="StepperContext",b.__docgenInfo={description:"",displayName:"StepperContext",filePath:"/home/runner/work/elements-design-system/elements-design-system/src/components/ProgressStepper/ProgressStepperContext.tsx",methods:[],props:{},tags:{}}}catch{}function j(){const t=P.useContext(b);if(t===void 0)throw new Error("useStepper must be used within a StepperProvider");return t}const V="_horizontal_19hvg_1",F="_timeline-item_19hvg_7",T="_timeline-item-header_19hvg_24",D="_indicator_19hvg_33",k="_active_19hvg_53",W="_title_19hvg_53",A="_number_19hvg_61",E="_check_19hvg_64",M="_description_19hvg_96",O="_brand_19hvg_118",H="_neutral_19hvg_150",o={horizontal:V,"timeline-item":"_timeline-item_19hvg_7",timelineItem:F,"timeline-item-header":"_timeline-item-header_19hvg_24",timelineItemHeader:T,indicator:D,active:k,title:W,number:A,check:E,description:M,brand:O,neutral:H},R={brand:"brand"},d={horizontal:"horizontal"};function l({className:t,variation:s=d.horizontal,variant:r=R.brand,allowNavigation:n=!0,...i}){const{steps:m,current:p,goTo:g}=j();return e.jsx("nav",{className:_(o[s],o[r],t),"aria-label":"Progress Stepper Navigation",...i,children:m.map((a,x)=>e.jsxs("button",{type:"button",className:_(o.timelineItem,{[o.active]:a.id===p}),onClick:()=>n&&g(a.id),"aria-label":`Step ${x+1}: ${a.label} ${a.description||""}`,"aria-current":a.id===p,"aria-disabled":!n,children:[e.jsx("div",{className:o.timelineItemHeader,children:e.jsxs("span",{className:o.indicator,"aria-hidden":"true",children:[e.jsx("span",{className:o.number,children:x+1}),e.jsx(C,{size:.75,className:o.check,name:z.CHECK})]})}),e.jsx(u,{className:o.title,variant:N.BODY_MEDIUM,children:a.label}),e.jsx(u,{className:o.description,variant:N.BODY_SMALL,children:a.description})]},a.id))})}try{l.displayName="ProgressStepperNav",l.__docgenInfo={description:"",displayName:"ProgressStepperNav",filePath:"/home/runner/work/elements-design-system/elements-design-system/src/components/ProgressStepper/ProgressStepperNav.tsx",methods:[],props:{variation:{defaultValue:{value:"horizontal"},declarations:[{fileName:"elements-design-system/src/components/ProgressStepper/ProgressStepperNavProps.ts",name:"ProgressStepperNavProps"}],description:"Layout direction for steps.",name:"variation",parent:{fileName:"elements-design-system/src/components/ProgressStepper/ProgressStepperNavProps.ts",name:"ProgressStepperNavProps"},required:!1,tags:{default:'"horizontal"'},type:{name:"enum",raw:'"horizontal"',value:[{value:'"horizontal"'}]}},variant:{defaultValue:{value:"brand"},declarations:[{fileName:"elements-design-system/src/components/ProgressStepper/ProgressStepperNavProps.ts",name:"ProgressStepperNavProps"}],description:`Visual variant for the stepper indicators.
- "brand": Uses accent/brand colors (default)
- "neutral": Uses neutral black/white colors`,name:"variant",parent:{fileName:"elements-design-system/src/components/ProgressStepper/ProgressStepperNavProps.ts",name:"ProgressStepperNavProps"},required:!1,tags:{default:'"brand"'},type:{name:"enum",raw:"ProgressStepperNavVariant",value:[{value:'"neutral"'},{value:'"brand"'}]}},allowNavigation:{defaultValue:{value:"true"},declarations:[{fileName:"elements-design-system/src/components/ProgressStepper/ProgressStepperNavProps.ts",name:"ProgressStepperNavProps"}],description:"Enables clicking steps to navigate.",name:"allowNavigation",parent:{fileName:"elements-design-system/src/components/ProgressStepper/ProgressStepperNavProps.ts",name:"ProgressStepperNavProps"},required:!1,tags:{default:"true"},type:{name:"boolean"}}},tags:{function:"ProgressStepperNav Component",description:`Navigation component for the Progress Stepper that displays a list of steps with their current state.
Renders interactive step indicators with labels and descriptions, allowing users to navigate between steps.`,param:`props - The component props
props.className - Additional class name
props.variation - The layout variation of the stepper navigation
props.variant - The visual variant of the stepper indicators
props.allowNavigation - Whether navigation between steps is allowed by user interaction`}}}catch{}function q(t,s,r){return()=>{const n=t.findIndex(i=>i.id===s);n<t.length-1&&r(t[n+1].id)}}function B(t,s,r){return()=>{const n=t.findIndex(i=>i.id===s);n>0&&r(t[n-1].id)}}function L(t,s){return r=>{t.some(n=>n.id===r)&&s(r)}}function U(t){return(s,r)=>t===s?r():null}function c(t){return({children:s,initialStep:r})=>{const[n,i]=P.useState(r||t[0]?.id||""),m=P.useMemo(()=>{const p=q(t,n,i),g=B(t,n,i),a=L(t,i),x=U(n);return{steps:t,current:n,next:p,previous:g,goTo:a,when:x}},[n]);return e.jsx(b.Provider,{value:m,children:s})}}try{c.displayName="defineStepper",c.__docgenInfo={description:"",displayName:"defineStepper",filePath:"/home/runner/work/elements-design-system/elements-design-system/src/components/ProgressStepper/ProgressStepperProvider.tsx",methods:[],props:{},tags:{}}}catch{}const $={title:"Components/ProgressStepper/ProgressStepperNav",component:l,parameters:{layout:"padded",docs:{description:{component:"A navigation component for multi-step processes. Requires a StepperProvider created with defineStepper. Displays steps with visual indicators for progress."}}},argTypes:{variation:{control:"select",options:Object.values(d),description:"Controls the layout variation of the stepper",table:{defaultValue:{summary:"horizontal"}}},className:{control:"text",description:"Additional CSS class names"},allowNavigation:{control:"boolean",description:"Whether navigation between steps is allowed by user interaction",table:{defaultValue:{summary:"true"}}}}},I=[{id:"account",label:"Account",description:"Create your account"},{id:"profile",label:"Profile",description:"Complete your profile"},{id:"preferences",label:"Preferences",description:"Set your preferences"},{id:"review",label:"Review",description:"Review and confirm"}],G=c(I),v={args:{variation:d.horizontal,allowNavigation:!0},decorators:[t=>e.jsx(G,{children:e.jsx(t,{})})]},h={args:{variation:d.horizontal,allowNavigation:!0},parameters:{docs:{description:{story:"Stepper starting at a specific step (third step in this case)."}}},render:t=>{const s=c(I);return e.jsx(s,{initialStep:"preferences",children:e.jsx(l,{...t})})}},S={args:{variation:d.horizontal,allowNavigation:!0},parameters:{docs:{description:{story:"Stepper without step descriptions, showing only labels."}}},render:t=>{const r=c([{id:"step1",label:"Personal Info"},{id:"step2",label:"Address"},{id:"step3",label:"Payment"},{id:"step4",label:"Confirmation"}]);return e.jsx(r,{children:e.jsx(l,{...t})})}},f={args:{variation:d.horizontal,allowNavigation:!0},parameters:{docs:{description:{story:"Stepper with many steps to demonstrate horizontal scrolling behavior."}}},render:t=>{const r=c([{id:"step1",label:"Step 1",description:"First step"},{id:"step2",label:"Step 2",description:"Second step"},{id:"step3",label:"Step 3",description:"Third step"},{id:"step4",label:"Step 4",description:"Fourth step"},{id:"step5",label:"Step 5",description:"Fifth step"},{id:"step6",label:"Step 6",description:"Sixth step"}]);return e.jsx(r,{initialStep:"step5",children:e.jsx(l,{...t})})}},Y=[{id:"step1",label:"Getting Started",description:"Welcome to the wizard"},{id:"step2",label:"Configuration",description:"Set up your preferences"},{id:"step3",label:"Verification",description:"Verify your settings"},{id:"step4",label:"Complete",description:"Finish setup"}],K=c(Y);function J({allowNavigation:t}){const{current:s,next:r,previous:n,when:i,steps:m}=j(),p=m.findIndex(g=>g.id===s);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",minWidth:"600px"},children:[e.jsx(l,{variation:d.horizontal,allowNavigation:t}),e.jsxs("div",{children:[i("step1",()=>e.jsxs(e.Fragment,{children:[e.jsx("h3",{style:{margin:"0 0 12px 0"},children:e.jsx(u,{children:"Current Step: Getting Started"})}),e.jsx("p",{style:{margin:"0 0 16px 0",color:"#666"},children:"Welcome to the wizard"})]})),i("step2",()=>e.jsxs(e.Fragment,{children:[e.jsx("h3",{style:{margin:"0 0 12px 0"},children:e.jsx(u,{children:"Current Step: Configuration"})}),e.jsx("p",{style:{margin:"0 0 16px 0",color:"#666"},children:"Set up your preferences"})]})),i("step3",()=>e.jsxs(e.Fragment,{children:[e.jsx("h3",{style:{margin:"0 0 12px 0"},children:e.jsx(u,{children:"Current Step: Verification"})}),e.jsx("p",{style:{margin:"0 0 16px 0",color:"#666"},children:"Verify your settings"})]})),i("step4",()=>e.jsxs(e.Fragment,{children:[e.jsx("h3",{style:{margin:"0 0 12px 0"},children:e.jsx(u,{children:"Current Step: Complete"})}),e.jsx("p",{style:{margin:"0 0 16px 0",color:"#666"},children:"Finish setup"})]})),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(w,{label:"Previous",onClick:n,disabled:p===0}),e.jsx(w,{label:"Next",onClick:r,disabled:p===m.length-1})]})]})]})}const y={name:"Interactive Example",args:{allowNavigation:!0},parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"Interactive stepper with navigation buttons demonstrating the full API including next, previous, and goTo methods."}}},render:t=>e.jsx(K,{children:e.jsx(J,{allowNavigation:t.allowNavigation})})};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variation: progressStepperNavVariations.horizontal,
    allowNavigation: true
  },
  decorators: [Story => <DefaultStepperProvider>
        <Story />
      </DefaultStepperProvider>]
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variation: progressStepperNavVariations.horizontal,
    allowNavigation: true
  },
  parameters: {
    docs: {
      description: {
        story: "Stepper starting at a specific step (third step in this case)."
      }
    }
  },
  render: args => {
    const StepperProvider = defineStepper(defaultSteps);
    return <StepperProvider initialStep="preferences">
        <ProgressStepperNav {...args} />
      </StepperProvider>;
  }
}`,...h.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    variation: progressStepperNavVariations.horizontal,
    allowNavigation: true
  },
  parameters: {
    docs: {
      description: {
        story: "Stepper without step descriptions, showing only labels."
      }
    }
  },
  render: args => {
    const steps = [{
      id: "step1",
      label: "Personal Info"
    }, {
      id: "step2",
      label: "Address"
    }, {
      id: "step3",
      label: "Payment"
    }, {
      id: "step4",
      label: "Confirmation"
    }] as const;
    const StepperProvider = defineStepper(steps);
    return <StepperProvider>
        <ProgressStepperNav {...args} />
      </StepperProvider>;
  }
}`,...S.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variation: progressStepperNavVariations.horizontal,
    allowNavigation: true
  },
  parameters: {
    docs: {
      description: {
        story: "Stepper with many steps to demonstrate horizontal scrolling behavior."
      }
    }
  },
  render: args => {
    const steps = [{
      id: "step1",
      label: "Step 1",
      description: "First step"
    }, {
      id: "step2",
      label: "Step 2",
      description: "Second step"
    }, {
      id: "step3",
      label: "Step 3",
      description: "Third step"
    }, {
      id: "step4",
      label: "Step 4",
      description: "Fourth step"
    }, {
      id: "step5",
      label: "Step 5",
      description: "Fifth step"
    }, {
      id: "step6",
      label: "Step 6",
      description: "Sixth step"
    }] as const;
    const StepperProvider = defineStepper(steps);
    return <StepperProvider initialStep="step5">
        <ProgressStepperNav {...args} />
      </StepperProvider>;
  }
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Interactive Example",
  args: {
    allowNavigation: true
  },
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: "Interactive stepper with navigation buttons demonstrating the full API including next, previous, and goTo methods."
      }
    }
  },
  render: args => {
    return <InteractiveStepperProvider>
        <InteractiveStepperContent allowNavigation={args.allowNavigation} />
      </InteractiveStepperProvider>;
  }
}`,...y.parameters?.docs?.source}}};const Q=["Default","WithInitialStep","WithoutDescriptions","ManySteps","Interactive"],Z=Object.freeze(Object.defineProperty({__proto__:null,Default:v,Interactive:y,ManySteps:f,WithInitialStep:h,WithoutDescriptions:S,__namedExportsOrder:Q,default:$},Symbol.toStringTag,{value:"Module"}));export{v as D,Z as P};

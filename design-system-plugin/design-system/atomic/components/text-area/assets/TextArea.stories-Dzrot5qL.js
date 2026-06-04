import{r as m,j as e,o as L,t as $,af as le,h as G,g as Y,k as B,i as R,H as oe,I as ie}from"./iframe-DU6-gHk6.js";import{u as de,I as X,F as l,b as me,c as ce}from"./InputLabel-Bnixl784.js";import{b as J}from"./rtl-BaEAq4kD.js";import{g as pe,I as K,F as ue}from"./getStateIcon-BbkNRRBr.js";import{T as xe}from"./Tooltip-3ve6LLZH.js";const fe="_focus_lt5fl_1",Te={focus:fe},he="_inverse_tyjn4_24",Q={"helper-text":"_helper-text_tyjn4_21",inverse:he};var s=(a=>(a.SMALL="small",a.MEDIUM="medium",a.LARGE="large",a))(s||{});const Ae="_textarea-wrapper_1w70y_1",ge="_disabled_1w70y_5",ye="_textarea_1w70y_1",ve="_inverse_1w70y_31",Ie="_large_1w70y_44",be="_medium_1w70y_47",Pe="_small_1w70y_50",Se="_error_1w70y_55",Ce="_success_1w70y_58",Ne="_focus_1w70y_61",Le="_textarea-icon-after_1w70y_68",d={"textarea-wrapper":"_textarea-wrapper_1w70y_1",textareaWrapper:Ae,disabled:ge,textarea:ye,inverse:ve,large:Ie,medium:be,small:Pe,error:Se,success:Ce,focus:Ne,"textarea-icon-after":"_textarea-icon-after_1w70y_68",textareaIconAfter:Le},O=m.forwardRef(function({iconBefore:r,iconAfter:n,disabled:t,placeholder:T,charCountHandler:E,maxLength:j,classNames:h,size:u=s.LARGE,onBlur:q=()=>{},onChange:z,filledStateIcon:F=!1,...D},M){const{state:p,inverse:x,disabled:U}=de(),i=t??U,V=pe(p,F),_=J("before"),w=J("after"),f=n??V;return e.jsxs("div",{className:d["textarea-wrapper"],children:[e.jsx("textarea",{ref:M,onBlur:q,disabled:i,placeholder:T,onChange:A=>{z?.(A),E?.(A.target.value.length)},className:L(d.textarea,d[u],d[p],{[$["body-medium"]]:u===s.LARGE||u===s.MEDIUM,[$["body-small"]]:u===s.SMALL,[d.inverse]:x,[d.disabled]:i,[d["icon-left"]]:!!(r&&_.left)||!!(f&&w.left),[d["icon-right"]]:!!(r&&_.right)||!!(f&&w.right)},h?.input),maxLength:j,...D}),r&&e.jsx(K,{state:l.DEFAULT,inverse:x,disabled:i,position:X.BEFORE,className:h?.iconWrapperBefore,children:r}),f&&e.jsx(K,{state:n?l.DEFAULT:p,inverse:x,disabled:i,position:X.AFTER,className:L(d["textarea-icon-after"],h?.iconWrapperAfter),children:f})]})});try{O.displayName="TextAreaInput",O.__docgenInfo={description:"",displayName:"TextAreaInput",filePath:"/home/runner/work/elements-design-system/elements-design-system/src/components/internal/form/TextAreaInput/TextAreaInput.tsx",methods:[],props:{iconBefore:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/internal/form/TextAreaInput/TextAreaInputProps.ts",name:"TextAreaInputProps"}],description:"",name:"iconBefore",parent:{fileName:"elements-design-system/src/components/internal/form/TextAreaInput/TextAreaInputProps.ts",name:"TextAreaInputProps"},required:!1,tags:{},type:{name:"ReactNode"}},iconAfter:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/internal/form/TextAreaInput/TextAreaInputProps.ts",name:"TextAreaInputProps"}],description:"",name:"iconAfter",parent:{fileName:"elements-design-system/src/components/internal/form/TextAreaInput/TextAreaInputProps.ts",name:"TextAreaInputProps"},required:!1,tags:{},type:{name:"ReactNode"}},charCountHandler:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/internal/form/TextAreaInput/TextAreaInputProps.ts",name:"TextAreaInputProps"}],description:"",name:"charCountHandler",parent:{fileName:"elements-design-system/src/components/internal/form/TextAreaInput/TextAreaInputProps.ts",name:"TextAreaInputProps"},required:!1,tags:{},type:{name:"((count: number) => void)"}},maxLength:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/internal/form/TextAreaInput/TextAreaInputProps.ts",name:"TextAreaInputProps"}],description:"",name:"maxLength",parent:{fileName:"elements-design-system/src/components/internal/form/TextAreaInput/TextAreaInputProps.ts",name:"TextAreaInputProps"},required:!1,tags:{},type:{name:"number"}},classNames:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/internal/form/TextAreaInput/TextAreaInputProps.ts",name:"TextAreaInputProps"}],description:"",name:"classNames",parent:{fileName:"elements-design-system/src/components/internal/form/TextAreaInput/TextAreaInputProps.ts",name:"TextAreaInputProps"},required:!1,tags:{},type:{name:"{ iconWrapperBefore?: string; iconWrapperAfter?: string; input?: string | undefined; } | undefined"}},size:{defaultValue:{value:"TextAreaSize.LARGE"},declarations:[{fileName:"elements-design-system/src/components/internal/form/TextAreaInput/TextAreaInputProps.ts",name:"TextAreaInputProps"}],description:"",name:"size",parent:{fileName:"elements-design-system/src/components/internal/form/TextAreaInput/TextAreaInputProps.ts",name:"TextAreaInputProps"},required:!1,tags:{},type:{name:"enum",raw:'"small" | "medium" | "large" | TextAreaSize',value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"small"',description:"",fullComment:"",tags:{}},{value:'"medium"',description:"",fullComment:"",tags:{}},{value:'"large"',description:"",fullComment:"",tags:{}}]}},onBlur:{defaultValue:{value:"() => {}"},declarations:[{fileName:"elements-design-system/src/components/internal/form/TextAreaInput/TextAreaInputProps.ts",name:"TextAreaInputProps"}],description:"",name:"onBlur",parent:{fileName:"elements-design-system/src/components/internal/form/TextAreaInput/TextAreaInputProps.ts",name:"TextAreaInputProps"},required:!1,tags:{},type:{name:"FocusEventHandler<HTMLTextAreaElement>"}},"data-testid":{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/internal/form/TextAreaInput/TextAreaInputProps.ts",name:"TextAreaInputProps"}],description:"",name:"data-testid",parent:{fileName:"elements-design-system/src/components/internal/form/TextAreaInput/TextAreaInputProps.ts",name:"TextAreaInputProps"},required:!1,tags:{},type:{name:"string"}},filledStateIcon:{defaultValue:{value:"false"},declarations:[{fileName:"elements-design-system/src/components/internal/form/TextAreaInput/TextAreaInputProps.ts",name:"TextAreaInputProps"}],description:"Whether to use filled variant for state icons (error/success).",name:"filledStateIcon",parent:{fileName:"elements-design-system/src/components/internal/form/TextAreaInput/TextAreaInputProps.ts",name:"TextAreaInputProps"},required:!1,tags:{default:"false"},type:{name:"boolean"}}},tags:{}}}catch{}const o=m.forwardRef(function({id:r,label:n,value:t,placeholder:T,inverse:E=!1,subText:j,disabled:h=!1,required:u=!1,showCharacterCount:q=!1,state:z=l.DEFAULT,optionalMessageI18n:F,classNames:D,labelEndSection:M,brandTheme:p=G.primary,size:x=s.LARGE,filledStateIcon:U=!1,...i},V){const{brandSecondaryClassName:_,brandTertiaryClassName:w}=le(p),f=m.useId(),A=m.useId(),H=m.useId(),W=r??f,k=m.useRef(null);m.useImperativeHandle(V,()=>k.current);const[ee,te]=m.useState(typeof t=="string"?t.length:0);m.useEffect(()=>{},[n,i]);const{wrapper:ae,label:se,subText:re,...ne}=D??{};return e.jsxs(me,{state:z,inverse:E,disabled:h,required:u,className:L(ae,{[_]:p===G.secondary,[w]:p===G.tertiary}),children:[n&&e.jsx(ce,{htmlFor:W,optionalMessageI18n:F,countValue:q?ee:void 0,counterId:H,maxLength:i.maxLength,className:se,endSection:M,size:x,children:n}),e.jsx(O,{ref:k,id:W,value:t,placeholder:T,"aria-describedby":`${H} ${A}`,...i,charCountHandler:te,maxLength:i.maxLength||240,classNames:ne,size:x,filledStateIcon:U}),j&&e.jsx(ue,{id:A,className:re??L(Q["helper-text"],{[Q.inverse]:E}),children:j})]})});try{o.displayName="TextArea",o.__docgenInfo={description:"Textarea component",displayName:"TextArea",filePath:"/home/runner/work/elements-design-system/elements-design-system/src/components/TextArea/TextArea.tsx",methods:[],props:{label:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/TextArea/TextAreaProps.ts",name:"TextAreaProps"}],description:`Label text displayed above the textarea.
Required for accessibility.`,name:"label",parent:{fileName:"elements-design-system/src/components/TextArea/TextAreaProps.ts",name:"TextAreaProps"},required:!0,tags:{},type:{name:"string"}},optionalMessageI18n:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/TextArea/TextAreaProps.ts",name:"TextAreaProps"}],description:`Custom text for "(Optional)" label suffix.
Use for internationalization.`,name:"optionalMessageI18n",parent:{fileName:"elements-design-system/src/components/TextArea/TextAreaProps.ts",name:"TextAreaProps"},required:!1,tags:{example:'"Optionnel" // French'},type:{name:"string"}},state:{defaultValue:{value:"FormControlState.DEFAULT"},declarations:[{fileName:"elements-design-system/src/components/TextArea/TextAreaProps.ts",name:"TextAreaProps"}],description:"Validation state controlling visual styling.",name:"state",parent:{fileName:"elements-design-system/src/components/TextArea/TextAreaProps.ts",name:"TextAreaProps"},required:!1,tags:{},type:{name:"enum",raw:'"success" | "error" | FormControlState | "default"',value:[{value:'"success"'},{value:'"error"'},{value:'"default"',description:"Normal/neutral state",fullComment:"Normal/neutral state",tags:{}},{value:'"error"',description:"Error/invalid state - shows red styling",fullComment:"Error/invalid state - shows red styling",tags:{}},{value:'"success"',description:"Success/valid state - shows green styling",fullComment:"Success/valid state - shows green styling",tags:{}},{value:'"default"'}]}},subText:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/TextArea/TextAreaProps.ts",name:"TextAreaProps"}],description:"Helper or error text displayed below the textarea.",name:"subText",parent:{fileName:"elements-design-system/src/components/TextArea/TextAreaProps.ts",name:"TextAreaProps"},required:!1,tags:{},type:{name:"string"}},inverse:{defaultValue:{value:"false"},declarations:[{fileName:"elements-design-system/src/components/TextArea/TextAreaProps.ts",name:"TextAreaProps"}],description:"Applies inverse styling for dark backgrounds.",name:"inverse",parent:{fileName:"elements-design-system/src/components/TextArea/TextAreaProps.ts",name:"TextAreaProps"},required:!1,tags:{default:"false"},type:{name:"boolean"}},showCharacterCount:{defaultValue:{value:"false"},declarations:[{fileName:"elements-design-system/src/components/TextArea/TextAreaProps.ts",name:"TextAreaProps"}],description:`Shows character count when maxLength is set.
Displays "X / maxLength" below the textarea.`,name:"showCharacterCount",parent:{fileName:"elements-design-system/src/components/TextArea/TextAreaProps.ts",name:"TextAreaProps"},required:!1,tags:{default:"false"},type:{name:"boolean"}},classNames:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/TextArea/TextAreaProps.ts",name:"TextAreaProps"}],description:"Custom CSS classes for textarea elements.",name:"classNames",parent:{fileName:"elements-design-system/src/components/TextArea/TextAreaProps.ts",name:"TextAreaProps"},required:!1,tags:{},type:{name:"({ iconWrapperBefore?: string; iconWrapperAfter?: string; input?: string | undefined; } & { wrapper?: string | undefined; label?: string | undefined; subText?: string | undefined; }) | undefined"}},labelEndSection:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/TextArea/TextAreaProps.ts",name:"TextAreaProps"}],description:`Content rendered at the end of the label row.
Use for tooltips or info icons.`,name:"labelEndSection",parent:{fileName:"elements-design-system/src/components/TextArea/TextAreaProps.ts",name:"TextAreaProps"},required:!1,tags:{},type:{name:"ReactNode"}},brandTheme:{defaultValue:{value:"BrandTheme.primary"},declarations:[{fileName:"elements-design-system/src/components/TextArea/TextAreaProps.ts",name:"TextAreaProps"}],description:"Override the theme at component level.",name:"brandTheme",parent:{fileName:"elements-design-system/src/components/TextArea/TextAreaProps.ts",name:"TextAreaProps"},required:!1,tags:{},type:{name:"enum",raw:'BrandTheme | "primary" | "secondary" | "tertiary"',value:[{value:'"primary"',description:"",fullComment:"",tags:{}},{value:'"secondary"',description:"",fullComment:"",tags:{}},{value:'"tertiary"',description:"",fullComment:"",tags:{}},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},size:{defaultValue:{value:"TextAreaSize.LARGE"},declarations:[{fileName:"elements-design-system/src/components/TextArea/TextAreaProps.ts",name:"TextAreaProps"}],description:"Size variant of the textarea.",name:"size",parent:{fileName:"elements-design-system/src/components/TextArea/TextAreaProps.ts",name:"TextAreaProps"},required:!1,tags:{default:"TextAreaSize.MEDIUM"},type:{name:"enum",raw:'"small" | "medium" | "large" | TextAreaSize',value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"small"',description:"",fullComment:"",tags:{}},{value:'"medium"',description:"",fullComment:"",tags:{}},{value:'"large"',description:"",fullComment:"",tags:{}}]}},onBlur:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/TextArea/TextAreaProps.ts",name:"TextAreaProps"}],description:"Callback fired when textarea loses focus.",name:"onBlur",parent:{fileName:"elements-design-system/src/components/TextArea/TextAreaProps.ts",name:"TextAreaProps"},required:!1,tags:{},type:{name:"FocusEventHandler<HTMLTextAreaElement>"}},filledStateIcon:{defaultValue:{value:"false"},declarations:[{fileName:"elements-design-system/src/components/TextArea/TextAreaProps.ts",name:"TextAreaProps"}],description:"Uses filled (solid) icons for validation states.",name:"filledStateIcon",parent:{fileName:"elements-design-system/src/components/TextArea/TextAreaProps.ts",name:"TextAreaProps"},required:!1,tags:{default:"false"},type:{name:"boolean"}},maxLength:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/internal/form/TextAreaInput/TextAreaInputProps.ts",name:"TextAreaInputProps"}],description:"",name:"maxLength",parent:{fileName:"elements-design-system/src/components/internal/form/TextAreaInput/TextAreaInputProps.ts",name:"TextAreaInputProps"},required:!1,tags:{},type:{name:"number"}},charCountHandler:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/internal/form/TextAreaInput/TextAreaInputProps.ts",name:"TextAreaInputProps"}],description:"",name:"charCountHandler",parent:{fileName:"elements-design-system/src/components/internal/form/TextAreaInput/TextAreaInputProps.ts",name:"TextAreaInputProps"},required:!1,tags:{},type:{name:"((count: number) => void)"}},"data-testid":{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/internal/form/TextAreaInput/TextAreaInputProps.ts",name:"TextAreaInputProps"}],description:"",name:"data-testid",parent:{fileName:"elements-design-system/src/components/internal/form/TextAreaInput/TextAreaInputProps.ts",name:"TextAreaInputProps"},required:!1,tags:{},type:{name:"string"}}},tags:{param:`id : Id of the textarea
label : Label on top of the textarea
value : Value of the textarea
placeholder : Placeholder text when no text is entered
inverse : Inverse color scheme on dark background
subText : Subtext below the textarea. Used for error or success message as well
disabled : Disable the textarea
required : Mark the textarea as required
showCharacterCount : Show the character count below the textarea
state : State of the textarea, can be DEFAULT, ERROR or SUCCESS
optionalMessageI18n : When the textarea is optional "(Optional)" is added to the label. This prop is used to translate the "(Optional)" text
classNames : Classnames for the textarea
labelEndSection : ReactNode to be rendered on the right side of the label
brandTheme : Brand theme of the textarea
size : Size of the textarea
onBlur : Event handler for the blur event`}}}catch{}const Ee={title:"Components/TextArea",component:o,argTypes:{size:{control:{type:"select"},options:Object.values(s)}}},c=({inverse:a,children:r})=>e.jsx(R,{color:a?B.INVERSE:B.DEFAULT,children:r}),Z=({label:a="label",placeholder:r="Placeholder",subText:n="This is a helper text",...t})=>{const T=L(Te.focus);return e.jsxs("div",{children:[e.jsxs("table",{style:{marginBottom:20},cellPadding:10,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{}),e.jsx("th",{children:e.jsx(c,{inverse:t.inverse,children:"Default"})}),e.jsx("th",{children:e.jsx(c,{inverse:t.inverse,children:"Active"})}),e.jsx("th",{children:e.jsx(c,{inverse:t.inverse,children:"Filled"})}),e.jsx("th",{children:e.jsx(c,{inverse:t.inverse,children:"Disabled"})})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(c,{inverse:t.inverse,children:t.inverse?"Inverse":"Default"})}),e.jsx("td",{children:e.jsx(o,{...t,label:a,placeholder:r,subText:n,inverse:t.inverse})}),e.jsx("td",{children:e.jsx(o,{...t,label:a,placeholder:r,subText:n,inverse:t.inverse,id:t.id,classNames:{input:T}})}),e.jsx("td",{children:e.jsx(o,{...t,label:a,placeholder:r,subText:n,inverse:t.inverse,defaultValue:r})}),e.jsx("td",{children:e.jsx(o,{...t,label:a,placeholder:r,subText:n,inverse:t.inverse,disabled:!0})})]})})]}),e.jsxs("table",{style:{marginBottom:20},cellPadding:10,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{}),e.jsx("th",{children:e.jsx(c,{inverse:t.inverse,children:"Error"})}),e.jsx("th",{children:e.jsx(c,{inverse:t.inverse,children:"Success"})})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(c,{inverse:t.inverse,children:t.inverse?"Inverse":"Default"})}),e.jsx("td",{children:e.jsx(o,{...t,label:a,placeholder:r,subText:n,inverse:t.inverse,state:l.ERROR})}),e.jsx("td",{children:e.jsx(o,{...t,label:a,placeholder:r,subText:n,inverse:t.inverse,state:l.SUCCESS})})]})})]})]})},g={args:{id:"text-area-id",label:"Text Area",subText:"This is a helper text",state:l.DEFAULT,inverse:!1,disabled:!1,required:!1,placeholder:"Placeholder",maxLength:240,showCharacterCount:!0,size:s.LARGE,filledStateIcon:!1,onBlur:()=>console.log("blur")}},y={tags:["isHidden"],args:{id:"text-area-id",label:"Label",optionalMessageI18n:"",subText:"This is a helper text",state:l.DEFAULT,inverse:!1,disabled:!1,required:!1,placeholder:"Placeholder",maxLength:240,showCharacterCount:!1,size:s.LARGE},render:a=>e.jsxs("div",{id:"is-active",children:[e.jsx(Y,{children:"Textarea"}),e.jsx(Z,{...a})]})},v={tags:["isHidden"],args:{id:"text-area-id",label:"Label",optionalMessageI18n:"",subText:"This is a helper text",state:l.DEFAULT,inverse:!0,disabled:!1,required:!1,placeholder:"Placeholder",maxLength:240,showCharacterCount:!1,size:s.LARGE},render:a=>e.jsxs("div",{children:[e.jsx(Y,{color:B.INVERSE,children:"Textarea"}),e.jsx(Z,{...a})]})},I={args:{id:"text-area-id-1",label:"Text Area",subText:"This is a helper text",state:l.DEFAULT,inverse:!1,disabled:!1,required:!1,placeholder:"Placeholder",size:s.LARGE}},b={args:{id:"text-area-id-2",label:"Text Area",subText:"This is a successful helper text",state:l.SUCCESS,inverse:!1,disabled:!1,required:!1,placeholder:"Placeholder",size:s.LARGE}},P={args:{id:"text-area-id-3",label:"Text Area",subText:"This is a helper text",state:l.ERROR,inverse:!1,disabled:!1,required:!1,placeholder:"Placeholder",size:s.LARGE}},S={args:{id:"text-area-id-3",label:"Text Area",subText:"This is a helper text",inverse:!0,disabled:!1,required:!1,placeholder:"Placeholder",size:s.LARGE}},C={args:{id:"text-area-id",label:"Text Area",subText:"This is a helper text",state:l.DEFAULT,inverse:!1,disabled:!1,required:!1,placeholder:"Placeholder",maxLength:240,showCharacterCount:!0,size:s.LARGE,labelEndSection:e.jsx(xe,{label:"Message",position:"left","aria-label":"Textarea Message",children:e.jsx(oe,{name:ie.INFO,"aria-label":"Textarea tooltip"})})}},N={args:{label:"Text Area",placeholder:"Placeholder",subText:"This is a helper text",state:l.DEFAULT,inverse:!1,disabled:!1,required:!1,maxLength:240,showCharacterCount:!0},render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[e.jsxs("div",{children:[e.jsx(R,{children:"Small"}),e.jsx(o,{...a,id:"textarea-small",size:s.SMALL})]}),e.jsxs("div",{children:[e.jsx(R,{children:"Medium"}),e.jsx(o,{...a,id:"textarea-medium",size:s.MEDIUM})]}),e.jsxs("div",{children:[e.jsx(R,{children:"Large"}),e.jsx(o,{...a,id:"textarea-large",size:s.LARGE})]})]})};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    id: "text-area-id",
    label: "Text Area",
    subText: "This is a helper text",
    state: FormControlState.DEFAULT,
    inverse: false,
    disabled: false,
    required: false,
    placeholder: "Placeholder",
    maxLength: 240,
    showCharacterCount: true,
    size: TextAreaSize.LARGE,
    filledStateIcon: false,
    onBlur: () => console.log("blur")
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ["isHidden"],
  args: {
    id: "text-area-id",
    label: "Label",
    optionalMessageI18n: "",
    subText: "This is a helper text",
    state: FormControlState.DEFAULT,
    inverse: false,
    disabled: false,
    required: false,
    placeholder: "Placeholder",
    maxLength: 240,
    showCharacterCount: false,
    size: TextAreaSize.LARGE
  },
  render: args => <div id="is-active">
      <Title>Textarea</Title>
      <TextAreaTable {...args} />
    </div>
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ["isHidden"],
  args: {
    id: "text-area-id",
    label: "Label",
    optionalMessageI18n: "",
    subText: "This is a helper text",
    state: FormControlState.DEFAULT,
    inverse: true,
    disabled: false,
    required: false,
    placeholder: "Placeholder",
    maxLength: 240,
    showCharacterCount: false,
    size: TextAreaSize.LARGE
  },
  render: args => <div>
      <Title color={TypographyColor.INVERSE}>Textarea</Title>
      <TextAreaTable {...args} />
    </div>
}`,...v.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    id: "text-area-id-1",
    label: "Text Area",
    subText: "This is a helper text",
    state: FormControlState.DEFAULT,
    inverse: false,
    disabled: false,
    required: false,
    placeholder: "Placeholder",
    size: TextAreaSize.LARGE
  }
}`,...I.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    id: "text-area-id-2",
    label: "Text Area",
    subText: "This is a successful helper text",
    state: FormControlState.SUCCESS,
    inverse: false,
    disabled: false,
    required: false,
    placeholder: "Placeholder",
    size: TextAreaSize.LARGE
  }
}`,...b.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    id: "text-area-id-3",
    label: "Text Area",
    subText: "This is a helper text",
    state: FormControlState.ERROR,
    inverse: false,
    disabled: false,
    required: false,
    placeholder: "Placeholder",
    size: TextAreaSize.LARGE
  }
}`,...P.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    id: "text-area-id-3",
    label: "Text Area",
    subText: "This is a helper text",
    inverse: true,
    disabled: false,
    required: false,
    placeholder: "Placeholder",
    size: TextAreaSize.LARGE
  }
}`,...S.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    id: "text-area-id",
    label: "Text Area",
    subText: "This is a helper text",
    state: FormControlState.DEFAULT,
    inverse: false,
    disabled: false,
    required: false,
    placeholder: "Placeholder",
    maxLength: 240,
    showCharacterCount: true,
    size: TextAreaSize.LARGE,
    labelEndSection: <Tooltip label="Message" position="left" aria-label="Textarea Message">
        <Icon name={IconName.INFO} aria-label="Textarea tooltip" />
      </Tooltip>
  }
}`,...C.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Text Area",
    placeholder: "Placeholder",
    subText: "This is a helper text",
    state: FormControlState.DEFAULT,
    inverse: false,
    disabled: false,
    required: false,
    maxLength: 240,
    showCharacterCount: true
  },
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 20
  }}>
      <div>
        <Typography>Small</Typography>
        <TextArea {...args} id="textarea-small" size={TextAreaSize.SMALL} />
      </div>
      <div>
        <Typography>Medium</Typography>
        <TextArea {...args} id="textarea-medium" size={TextAreaSize.MEDIUM} />
      </div>
      <div>
        <Typography>Large</Typography>
        <TextArea {...args} id="textarea-large" size={TextAreaSize.LARGE} />
      </div>
    </div>
}`,...N.parameters?.docs?.source}}};const je=["Default","Overview","OverviewInverse","NoCounter","Success","ErrorState","Inverse","WithTooltip","Sizes"],Fe=Object.freeze(Object.defineProperty({__proto__:null,Default:g,ErrorState:P,Inverse:S,NoCounter:I,Overview:y,OverviewInverse:v,Sizes:N,Success:b,WithTooltip:C,__namedExportsOrder:je,default:Ee},Symbol.toStringTag,{value:"Module"}));export{g as D,S as I,b as S,Fe as T,C as W};

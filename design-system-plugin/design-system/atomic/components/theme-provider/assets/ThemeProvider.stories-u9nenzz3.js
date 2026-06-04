import{Q as c,j as e,f as i,h as t,I as l,B as o,e as s,R as p}from"./iframe-DU6-gHk6.js";import{G as n}from"./index-Bre8NiPo.js";import{B as d}from"./ButtonIcon-B-F3gh4N.js";import{b as h,a as u}from"./Checkbox-DhaBB2L5.js";import{b as x,a as b}from"./Switch-Din-dnRH.js";import{a as I}from"./Select-CQJ-nqhp.js";import{a as m,F as S}from"./InputLabel-Bnixl784.js";import{L as C}from"./LinkStandalone-CcuMMn66.js";import{L as y}from"./Link-Dsc7KtyT.js";import{d as f,b as v}from"./ChipDropdown-Cfq1I8ct.js";import{c as z,C as B}from"./ChipFilter-BQAfsmhY.js";import{a as M,C as j}from"./ChipSelect-DJs7iV7-.js";import{a as A,b as G,C as D}from"./ChipStatus-BDbCokFo.js";import{C as L}from"./Calendar-Dz51-pT-.js";import{D as k}from"./DatePicker-CqEp3DeW.js";import{A as T}from"./Autocomplete-Br2L4xQB.js";const R={title:"Components/ThemeProvider",component:c,parameters:{layout:"centered"},argTypes:{theme:{control:"select",options:Object.values(p)},children:{control:!1}}},a={args:{children:e.jsxs(n.Root,{children:[e.jsx(n.Item,{xs:6,children:e.jsxs("div",{style:{display:"flex",flexDirection:"row",gap:"1rem"},children:[e.jsx(i,{label:"primary",brandTheme:t.primary}),e.jsx(i,{label:"secondary",brandTheme:t.secondary}),e.jsx(i,{label:"tertiary",brandTheme:t.tertiary})]})}),e.jsx(n.Item,{xs:6,children:e.jsxs("div",{style:{display:"flex",flexDirection:"row",gap:"1rem"},children:[e.jsx(d,{variant:s.PRIMARY,size:o.MEDIUM,icon:l.BOOKMARK,brandTheme:t.primary}),e.jsx(d,{variant:s.PRIMARY,size:o.MEDIUM,icon:l.BOOKMARK,brandTheme:t.secondary}),e.jsx(d,{variant:s.PRIMARY,size:o.MEDIUM,icon:l.BOOKMARK,brandTheme:t.tertiary})]})}),e.jsx(n.Item,{xs:6,children:e.jsx(h,{label:"Checkbox",checkboxSize:u.MEDIUM,value:"checkbox"})}),e.jsx(n.Item,{xs:6,children:e.jsx(x,{label:"Switch",size:b.MEDIUM,onChange:()=>{},defaultChecked:!0})}),e.jsx(n.Item,{xs:6,children:e.jsx(I,{id:"select",required:!0,placeholder:"Select an option",state:S.DEFAULT,inverse:!1,disabled:!1,multiple:!1,size:m.LARGE,maxItemsVisible:3,options:[{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"apple",label:"Apple"},{value:"blueberry",label:"Blueberry"}]})}),e.jsx(n.Item,{xs:6,children:e.jsx(T,{options:[{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"apple",label:"Apple"},{value:"blueberry",label:"Blueberry"}],placeholder:"Select an option",size:m.LARGE})}),e.jsx(n.Item,{xs:6,children:e.jsx(C,{href:"#",target:"_blank",children:"Link Standalone"})}),e.jsx(n.Item,{xs:6,children:e.jsx(y,{href:"#",target:"_blank",children:"Link"})}),e.jsx(n.Item,{xs:3,children:e.jsx(f,{items:[{id:"1",label:"Option 1"},{id:"2",label:"Option 2"},{id:"3",label:"Option 3"}],multiSelect:!1,size:v.SMALL,children:"Chip Dropdown"})}),e.jsx(n.Item,{xs:3,children:e.jsx(z,{onDelete:()=>{},size:B.SMALL,children:"Chip Filter"})}),e.jsx(n.Item,{xs:3,children:e.jsx(M,{showIcon:!0,onClick:()=>{},size:j.SMALL,children:"Chip Select"})}),e.jsx(n.Item,{xs:3,children:e.jsx(A,{status:D.BRAND,size:G.SMALL,children:"Chip Status"})}),e.jsx(n.Item,{xs:6,children:e.jsx(L,{onSelectedDateChange:r=>console.log(r)})}),e.jsx(n.Item,{xs:6,children:e.jsx(k,{value:"2025-01-01",onChange:r=>console.log(r?.target?.value)})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Grid.Root>
        <Grid.Item xs={6}>
          <div style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem"
        }}>
            <Button label="primary" brandTheme={BrandTheme.primary} />
            <Button label="secondary" brandTheme={BrandTheme.secondary} />
            <Button label="tertiary" brandTheme={BrandTheme.tertiary} />
          </div>
        </Grid.Item>
        <Grid.Item xs={6}>
          <div style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem"
        }}>
            <ButtonIcon variant={ButtonVariant.PRIMARY} size={ButtonSize.MEDIUM} icon={IconName.BOOKMARK} brandTheme={BrandTheme.primary} />
            <ButtonIcon variant={ButtonVariant.PRIMARY} size={ButtonSize.MEDIUM} icon={IconName.BOOKMARK} brandTheme={BrandTheme.secondary} />
            <ButtonIcon variant={ButtonVariant.PRIMARY} size={ButtonSize.MEDIUM} icon={IconName.BOOKMARK} brandTheme={BrandTheme.tertiary} />
          </div>
        </Grid.Item>
        <Grid.Item xs={6}>
          <Checkbox label="Checkbox" checkboxSize={CheckboxSize.MEDIUM} value="checkbox" />
        </Grid.Item>
        <Grid.Item xs={6}>
          <Switch label="Switch" size={SwitchSize.MEDIUM} onChange={() => {}} defaultChecked />
        </Grid.Item>
        <Grid.Item xs={6}>
          <Select id="select" required={true} placeholder="Select an option" state={FormControlState.DEFAULT} inverse={false} disabled={false} multiple={false} size={InputSize.LARGE} maxItemsVisible={3} options={[{
          value: "banana",
          label: "Banana"
        }, {
          value: "cherry",
          label: "Cherry"
        }, {
          value: "apple",
          label: "Apple"
        }, {
          value: "blueberry",
          label: "Blueberry"
        }]} />
        </Grid.Item>
        <Grid.Item xs={6}>
          <Autocomplete options={[{
          value: "banana",
          label: "Banana"
        }, {
          value: "cherry",
          label: "Cherry"
        }, {
          value: "apple",
          label: "Apple"
        }, {
          value: "blueberry",
          label: "Blueberry"
        }]} placeholder="Select an option" size={InputSize.LARGE} />
        </Grid.Item>
        <Grid.Item xs={6}>
          <LinkStandalone href="#" target="_blank">
            Link Standalone
          </LinkStandalone>
        </Grid.Item>

        <Grid.Item xs={6}>
          <Link href="#" target="_blank">
            Link
          </Link>
        </Grid.Item>
        <Grid.Item xs={3}>
          <ChipDropdown items={[{
          id: "1",
          label: "Option 1"
        }, {
          id: "2",
          label: "Option 2"
        }, {
          id: "3",
          label: "Option 3"
        }]} multiSelect={false} size={ChipDropdownSize.SMALL}>
            Chip Dropdown
          </ChipDropdown>
        </Grid.Item>
        <Grid.Item xs={3}>
          <ChipFilter onDelete={() => {}} size={ChipFilterSize.SMALL}>
            Chip Filter
          </ChipFilter>
        </Grid.Item>
        <Grid.Item xs={3}>
          <ChipSelect showIcon={true} onClick={() => {}} size={ChipSelectSize.SMALL}>
            Chip Select
          </ChipSelect>
        </Grid.Item>
        <Grid.Item xs={3}>
          <ChipStatus status={ChipStatusType.BRAND} size={ChipStatusSize.SMALL}>
            Chip Status
          </ChipStatus>
        </Grid.Item>

        <Grid.Item xs={6}>
          <Calendar onSelectedDateChange={event => console.log(event)} />
        </Grid.Item>
        <Grid.Item xs={6}>
          <DatePicker value="2025-01-01" onChange={event => console.log(event?.target?.value)} />
        </Grid.Item>
      </Grid.Root>
  }
}`,...a.parameters?.docs?.source}}};const g=["Default"],X=Object.freeze(Object.defineProperty({__proto__:null,Default:a,__namedExportsOrder:g,default:R},Symbol.toStringTag,{value:"Module"}));export{a as D,X as T};

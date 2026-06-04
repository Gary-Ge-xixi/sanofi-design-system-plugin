import{j as e,l as x,i as r,m as v,n as S}from"./iframe-DU6-gHk6.js";import{C as l}from"./Calendar-Dz51-pT-.js";import{G as i}from"./index-Bre8NiPo.js";import{c as f}from"./create-toast-Bk21w6Tb.js";const{useArgs:h}=__STORYBOOK_MODULE_PREVIEW_API__,j={title:"Components/Calendar",component:l,argTypes:{}},m=(a,t,n)=>{f({title:"Toast notification",text:`the ${t} props has been called with value  ${n}`,variant:S.SUCCESS,displayCloseButton:!0,position:v.BOTTOM_CENTER,duration:1e4,...a})},c={args:{selectedDate:"2025-01-01"},render:function(t){const[,n]=h();return e.jsxs(e.Fragment,{children:[e.jsx(x,{}),e.jsx(l,{...t,onSelectedDateChange:s=>{m(t,"onSelectedDateChange",s),n({selectedDate:s})}})]})}},g={args:{selectedDate:"2025-01-01"},render:a=>{const t={display:"flex",justifyContent:"center",alignItems:"center",gap:"var(--elements-spacing-xl)"},n={display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"};return e.jsxs(i.Root,{children:[e.jsxs(i.Item,{style:t,children:[e.jsxs("div",{style:n,children:[e.jsx(r,{children:"Disable weekends"}),e.jsx(l,{...a,disabledDates:s=>[0,6].includes(s.getDay())})]}),e.jsxs("div",{style:n,children:[e.jsx(r,{children:"Disable all"}),e.jsx(l,{...a,disabledDates:()=>!0})]})]}),e.jsxs(i.Item,{style:t,children:[e.jsxs("div",{style:n,children:[e.jsx(r,{children:"Disable specific dates"}),e.jsx(l,{...a,disabledDates:["2025-02-01","2025-02-06","2025-02-12","2025-02-15","2025-02-18","2025-02-20","2025-02-23","2025-02-26"]})]}),e.jsxs("div",{style:n,children:[e.jsx(r,{children:"Disable past dates"}),e.jsx(l,{...a,disabledDates:s=>s<new Date})]})]})]})}},y={args:{selectedDate:"2025-01-15"},render:a=>{const t={display:"flex",justifyContent:"center",alignItems:"center",gap:"var(--elements-spacing-xl)"},n={display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"var(--elements-spacing-sm)"};return e.jsxs(i.Root,{children:[e.jsxs(i.Item,{style:t,children:[e.jsxs("div",{style:n,children:[e.jsx(r,{children:"Min Date: Dec 1, 2024"}),e.jsx(l,{...a,minSelectableDate:new Date(2024,11,1)})]}),e.jsxs("div",{style:n,children:[e.jsx(r,{children:"Max Date: Mar 31, 2025"}),e.jsx(l,{...a,maxSelectableDate:new Date(2025,2,31)})]})]}),e.jsx(i.Item,{style:t,children:e.jsxs("div",{style:n,children:[e.jsx(r,{children:"Both Min and Max"}),e.jsx(r,{variant:"body-small",children:"Dec 2024 - Mar 2025"}),e.jsx(l,{...a,minSelectableDate:new Date(2024,11,1),maxSelectableDate:new Date(2025,2,31)})]})})]})}},p={args:{selectedRange:{start:"2025-01-10",end:"2025-01-20"},rangeSelectionState:"start"},render:function(t){const[,n]=h(),s=t;return e.jsxs(e.Fragment,{children:[e.jsx(x,{}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--elements-spacing-md)",alignItems:"center"},children:[e.jsx(r,{children:"Click dates to select a range"}),e.jsx(l,{...t,onSelectedDateChange:o=>{const u=s.selectedRange??{},d={...u};if(s.rangeSelectionState==="start")d.start=o,d.end=void 0,n({selectedRange:d,rangeSelectionState:"end"}),m({},"onSelectedDateChange",`Start: ${o}`);else{const D=u.start;D&&new Date(o)<new Date(D)?(d.start=o,d.end=D):d.end=o,n({selectedRange:d,rangeSelectionState:"start"}),m({},"onSelectedDateChange",`Range: ${d.start??"?"} to ${d.end??"?"}`)}}}),e.jsxs(r,{variant:"body-small",children:["Current range: ",s.selectedRange?.start??"Not selected"," →"," ",s.selectedRange?.end??"Not selected"]})]})]})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    selectedDate: "2025-01-01"
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs<{
      selectedDate: string;
    }>();
    return <>
        <Toast />
        <Calendar {...args} onSelectedDateChange={e => {
        notify(args as Partial<ToastOptions>, "onSelectedDateChange", e);
        updateArgs({
          selectedDate: e
        });
      }} />
      </>;
  }
}`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    selectedDate: "2025-01-01"
  },
  render: args => {
    const gridStyleOverrides = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "var(--elements-spacing-xl)"
    };
    const styleOverrides = {
      display: "flex",
      flexDirection: "column" as const,
      justifyContent: "center",
      alignItems: "center"
    };
    return <Grid.Root>
        <Grid.Item style={gridStyleOverrides}>
          <div style={styleOverrides}>
            <Typography>Disable weekends</Typography>
            <Calendar {...args} disabledDates={date => [0, 6].includes(date.getDay())} />
          </div>
          <div style={styleOverrides}>
            <Typography>Disable all</Typography>
            <Calendar {...args} disabledDates={() => true} />
          </div>
        </Grid.Item>

        <Grid.Item style={gridStyleOverrides}>
          <div style={styleOverrides}>
            <Typography>Disable specific dates</Typography>
            <Calendar {...args} disabledDates={["2025-02-01", "2025-02-06", "2025-02-12", "2025-02-15", "2025-02-18", "2025-02-20", "2025-02-23", "2025-02-26"]} />
          </div>

          <div style={styleOverrides}>
            <Typography>Disable past dates</Typography>
            <Calendar {...args} disabledDates={date => date < new Date()} />
          </div>
        </Grid.Item>
      </Grid.Root>;
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    selectedDate: "2025-01-15"
  },
  render: args => {
    const gridStyleOverrides = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "var(--elements-spacing-xl)"
    };
    const styleOverrides = {
      display: "flex",
      flexDirection: "column" as const,
      justifyContent: "center",
      alignItems: "center",
      gap: "var(--elements-spacing-sm)"
    };
    return <Grid.Root>
        <Grid.Item style={gridStyleOverrides}>
          <div style={styleOverrides}>
            <Typography>Min Date: Dec 1, 2024</Typography>
            <Calendar {...args} minSelectableDate={new Date(2024, 11, 1)} />
          </div>
          <div style={styleOverrides}>
            <Typography>Max Date: Mar 31, 2025</Typography>
            <Calendar {...args} maxSelectableDate={new Date(2025, 2, 31)} />
          </div>
        </Grid.Item>

        <Grid.Item style={gridStyleOverrides}>
          <div style={styleOverrides}>
            <Typography>Both Min and Max</Typography>
            <Typography variant="body-small">Dec 2024 - Mar 2025</Typography>
            <Calendar {...args} minSelectableDate={new Date(2024, 11, 1)} maxSelectableDate={new Date(2025, 2, 31)} />
          </div>
        </Grid.Item>
      </Grid.Root>;
  }
}`,...y.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    selectedRange: {
      start: "2025-01-10",
      end: "2025-01-20"
    },
    rangeSelectionState: "start" as const
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs<typeof args>();
    const typedArgs = args as {
      selectedRange?: {
        start?: string;
        end?: string;
      };
      rangeSelectionState?: "start" | "end";
    };
    return <>
        <Toast />
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--elements-spacing-md)",
        alignItems: "center"
      }}>
          <Typography>Click dates to select a range</Typography>
          <Calendar {...args} onSelectedDateChange={date => {
          const currentRange = typedArgs.selectedRange ?? {};
          const newRange: {
            start?: string;
            end?: string;
          } = {
            ...currentRange
          };
          if (typedArgs.rangeSelectionState === "start") {
            newRange.start = date;
            newRange.end = undefined;
            updateArgs({
              selectedRange: newRange,
              rangeSelectionState: "end"
            });
            notify({} as Partial<ToastOptions>, "onSelectedDateChange", \`Start: \${date}\`);
          } else {
            const startDate = currentRange.start;
            if (startDate && new Date(date) < new Date(startDate)) {
              newRange.start = date;
              newRange.end = startDate;
            } else {
              newRange.end = date;
            }
            updateArgs({
              selectedRange: newRange,
              rangeSelectionState: "start"
            });
            notify({} as Partial<ToastOptions>, "onSelectedDateChange", \`Range: \${newRange.start ?? "?"} to \${newRange.end ?? "?"}\`);
          }
        }} />
          <Typography variant="body-small">
            Current range: {typedArgs.selectedRange?.start ?? "Not selected"} →{" "}
            {typedArgs.selectedRange?.end ?? "Not selected"}
          </Typography>
        </div>
      </>;
  }
}`,...p.parameters?.docs?.source}}};const R=["Default","Disabled","WithDateConstraints","RangeSelection"],w=Object.freeze(Object.defineProperty({__proto__:null,Default:c,Disabled:g,RangeSelection:p,WithDateConstraints:y,__namedExportsOrder:R,default:j},Symbol.toStringTag,{value:"Module"}));export{w as C,c as D};

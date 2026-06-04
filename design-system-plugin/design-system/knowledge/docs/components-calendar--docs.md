---
storybook_id: components-calendar--docs
title: "Components/Calendar"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-calendar--docs"
import_path: "./src/components/DatePicker/Calendar/Calendar.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:06:05.695Z
---

# Source: Components/Calendar

- Storybook ID: `components-calendar--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-calendar--docs
- Import path: `./src/components/DatePicker/Calendar/Calendar.mdx`
- Capture status: `extracted`

# Calendar

## The Calendar component is used to capture date from the user.

## Example

| Mon | Tue | Wed | Thu | Fri | Sat | Sun |
| --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |

## Anatomy

```
import { Calendar } from "@sanofi-accelerator/elements";

const Component = () => (
  <Calendar
    onSelectedDateChange={(event) => console.log(event.target.value)}
  />
);

// to disable specific days
const Component = () => (
  <Calendar
    onSelectedDateChange={(event) => console.log(event.target.value)}
    disabledDates={[
            "2025-02-01",
            "2025-02-06",
            "2025-02-12",
            "2025-02-15",
            "2025-02-18",
            "2025-02-20",
            "2025-02-23",
            "2025-02-26",
          ]}
  />
);

// to disable weekends
const Component = () => (
  <Calendar
    onSelectedDateChange={(event) => console.log(event.target.value)}
    disabledDates={(date) => [0, 6].includes(date.getDay())}
  />
);
```

## API Reference

### DatePicker

| Name | Description | Default |
| --- | --- | --- |
| selectedDate | Currently selected date.stringDate | - |
| onSelectedDateChange | Callback fired when a date is selected.((date: string) => void) | - |
| picker | Picker granularity for selection behavior."day""month""year""quarter" | "SelectorType.DAY" |
| onSelectedMonthChange | Callback for month selection (monthIndex: 0-11).((year: number, monthIndex: number) => void) | - |
| onSelectedQuarterChange | Callback for quarter selection (quarter: 1-4).((year: number, quarter: number) => void) | - |
| onSelectedYearChange | Callback for year selection.((year: number) => void) | - |
| selectedRange | Currently selected date range.DateRange | - |
| rangeSelectionState | Current range selection state."start""end" | - |
| onDateHover | Callback fired when hovering over a date.((date: string \| null) => void) | - |
| hoveredDate | Currently hovered date (for range preview).stringnull | - |
| disabledDates | Dates to disable (function, string array, or Date array).string[] \| ((date: Date) => boolean) \| Date[] | - |
| fromDatePicker | boolean | false |
| externalPeriod | Externally controlled displayed month/year.{ year: number; month: number; } | - |
| onExternalPeriodChange | Callback when displayed period changes.((period: { year: number; month: number; }) => void) | - |
| minSelectableDate | Minimum selectable date.Date | - |
| maxSelectableDate | Maximum selectable date.Date | - |
| minDate | Minimum navigable date (for month navigation).Date | - |
| maxDate | Maximum navigable date (for month navigation).Date | - |
| autoFocus | Auto-focus the calendar on mount.boolean | true |
| onNavigateToNextCalendar | Callback for next calendar navigation (dual calendar).(() => void) | - |
| onNavigateToPreviousCalendar | Callback for previous calendar navigation (dual calendar).(() => void) | - |
| defaultSelectorType | Default selector view type."day""month""year""quarter" | "SelectorType.DAY" |
| footerContent | Custom footer content renderer.(() => ReactNode) | - |
| showFooterDivider | Shows divider above footer.boolean | true |

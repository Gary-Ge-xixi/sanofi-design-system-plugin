---
storybook_id: components-datepicker--docs
title: "Components/DatePicker"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-datepicker--docs"
import_path: "./src/components/DatePicker/DatePicker.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:07:39.554Z
---

# Source: Components/DatePicker

- Storybook ID: `components-datepicker--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-datepicker--docs
- Import path: `./src/components/DatePicker/DatePicker.mdx`
- Capture status: `extracted`

# DatePicker

## The DatePicker component captures dates with flexible granularity. It supports single or range selection via mode, and multiple picker types via picker (day, month, quarter, year).

## Examples

### Single Date Selection (Default)

Date Picker

Select a single date

### Date Range Selection

Date Range Picker

Smart range selection - dates auto-order chronologically

### Dual Calendar

Dual Calendar Range Picker (Optional)

Select dates across two synchronized calendars

### Month / Quarter / Year Pickers

Month Picker (Optional)

Select a month (YYYY-MM)

Quarter Picker (Optional)

Select a quarter (YYYY-Qx)

Year Picker (Optional)

Select a year (YYYY)

### Date Picker with Footer Actions

Select date with footer actions (Optional)

Select date range with footer actions (Optional)

Select date range (dual calendar) with footer actions (Optional)

## Anatomy

### Single Date Selection

```
import { DatePicker, FormControlState, InputSize } from "@sanofi-accelerator/elements";

const SingleDatePicker = () => {
  const [date, setDate] = useState("2021-01-01");

  return (
    <DatePicker
      id="date-picker"
      label="Select Date"
      size={InputSize.LARGE} // or InputSize.MEDIUM
      state={FormControlState.DEFAULT} // or FormControlState.ERROR or FormControlState.SUCCESS
      subText="Choose a single date"
      value={date}
      onChange={(event) => setDate(event.target.value)}
      clearable
    />
  );
};
```

### Date Range Selection

```
import { DatePicker, FormControlState, InputSize } from "@sanofi-accelerator/elements";

const RangeDatePicker = () => {
  const [dateRange, setDateRange] = useState({ start: "2021-01-01", end: "2021-01-15" });

  return (
    <DatePicker
      mode="range"
      id="range-picker"
      label="Select Date Range"
      size={InputSize.LARGE}
      state={FormControlState.DEFAULT}
      subText="Choose start and end dates"
      value={dateRange}
      onChange={(event) => setDateRange(event.target.value)}
      clearable
    />
  );
};
```

### Dual Calendar

```
import { DatePicker, FormControlState, InputSize } from "@sanofi-accelerator/elements";

const DualCalendarPicker = () => {
  const [dateRange, setDateRange] = useState({ start: "2021-01-01", end: "2021-02-15" });

  return (
    <DatePicker
      mode="range"
      calendarCount={2}
      id="dual-calendar-picker"
      label="Select Date Range"
      size={InputSize.LARGE}
      state={FormControlState.DEFAULT}
      subText="Navigate through two synchronized calendars"
      value={dateRange}
      onChange={(event) => setDateRange(event.target.value)}
      clearable
    />
  );
};
```

## Usage Notes

### Range Selection Behavior

When using mode="range":

- Dates automatically order chronologically - you can select end date before start date
- The component handles partial ranges (only start or only end date selected)
- Clear button removes the entire range
- Value format: { start?: string | Date, end?: string | Date }

### Value Formats

- Single mode (day picker): ISO date string (e.g., "2021-01-01")
- Range mode: Object with start/end properties (e.g., { start: "2021-01-01", end: "2021-01-15" })
- Month picker: YYYY-MM (MM = 01..12)
- Quarter picker: YYYY-Qn (n = 1..4)
- Year picker: YYYY

### Dual Calendar Mode

When using calendarCount={2} with mode="range":

- Two calendars are displayed side by side for easier range selection
- Calendars are synchronized - navigating one updates the other
- Automatically displays the months containing your selected date range
- Left calendar shows the start date's month, right calendar shows the next month
- Ideal for selecting ranges that span multiple months
- Requires more horizontal space (recommended container width: 600px+)

### Footer Actions (Optional)

The DatePicker supports an optional footer with custom action buttons using the footerContent prop. When a footer is present, the DatePicker operates in deferred commit mode, where date selections are not immediately committed until the user clicks "Confirm".

#### Deferred Commit Behavior

Without Footer (Default):

- Click date → onChange fires immediately → calendar closes

With Footer:

- Click date → temporary visual selection only (no onChange)
- Click Clear → clears temporary selection, keeps calendar open → calls onClear()
- Click Cancel → reverts to committed value, closes calendar → calls onCancel()
- Click Confirm → commits temporary value via onChange, closes calendar → calls onConfirm(value)

```
import { DatePicker, Button, ButtonVariant, ButtonSize } from "@sanofi-accelerator/elements";
import styles from "@sanofi-accelerator/elements/dist/components/DatePicker/Calendar/calendar.module.scss";

const DatePickerWithFooter = () => {
  const [value, setValue] = useState("2024-06-15");

  return (
    <DatePicker
      label="Select Date"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onClear={() => {
        console.log("After clear - do additional cleanup");
      }}
      onCancel={() => {
        console.log("After cancel - track analytics");
      }}
      onConfirm={(confirmedValue) => {
        console.log("After confirm - save to backend:", confirmedValue);
      }}
      footerContent={(actions) => (
          <div className={styles.footer}>
            <Button
              variant={ButtonVariant.TERTIARY}
              size={ButtonSize.SMALL}
              label="Clear"
            onClick={actions.clear}
            />
            <div className={styles.footerActions}>
              <Button
                variant={ButtonVariant.SECONDARY}
                size={ButtonSize.SMALL}
                label="Cancel"
              onClick={actions.cancel}
              />
              <Button
                variant={ButtonVariant.PRIMARY}
                size={ButtonSize.SMALL}
                label="Confirm"
              onClick={actions.confirm}
              />
            </div>
          </div>
      )}
    />
  );
};
```

#### Why is footerContent a Function? (Render Prop Pattern)

The footerContent prop uses a render prop pattern - it's a function that receives action handlers from the design system, not plain JSX. This is intentional and necessary.

Why not just pass JSX?

```
// ❌ THIS DOESN'T WORK - How would you trigger internal actions?
footerContent={
  <Button label="Clear" onClick={???} />  {/* What goes here? */}
}
```

You need access to the DatePicker's internal action handlers (to clear state, close calendar, commit values). The render prop pattern gives you that access:

```
// ✅ CORRECT - Design system passes action handlers to your function
footerContent={(actions) => (
  //           ↑ receives { clear, cancel, confirm }
  <Button
    label="Confirm"
    onClick={actions.confirm}  // ← Triggers design system's internal logic
  />
)}
```

How it works:

1. You provide a function that receives actions: { clear, cancel, confirm }
2. Design system calls your function with its internal handlers
3. You wire up your buttons to those handlers using onClick={actions.clear}, etc.
4. When clicked, the design system manages state, then calls your callback (onClear, onConfirm, etc.)

This pattern ensures clean separation: the design system handles all state/behavior, you just provide the UI.

Key Points:

- The design system automatically adds a divider above the footer with proper spacing
- Footer buttons typically include: "Clear" (left), "Cancel" and "Confirm" (right)
- Use styles.footer and styles.footerActions classes for proper layout (space-between and button grouping)
- The footer appears at the bottom of the calendar panel
- For range pickers with dual calendars, the footer spans the full width beneath both calendars
- Input field updates immediately with temporary selection (visual feedback before commit)

Execution Order:

1. User clicks footer button (e.g., Confirm)
2. Design system performs core action (commits temporary value, calls onChange, closes calendar)
3. Design system calls consumer callback (e.g., onConfirm(value))
4. Consumer can perform additional logic (analytics, API calls, validation, etc.)

### TypeScript Types

```
type DatePickerMode = "single" | "range";

interface DateRange {
  start?: string | Date;
  end?: string | Date;
}

// Single mode value
value?: string | number | Date;

// Range mode value
value?: DateRange;

// Picker
picker?: 'day' | 'month' | 'quarter' | 'year';

// Footer content (optional) - RENDER PROP PATTERN
// footerContent is a FUNCTION that receives action handlers
interface FooterActions {
  clear: () => void;    // Clears selection and calls onChange with empty value
  cancel: () => void;   // Reverts to committed value and closes calendar
  confirm: () => void;  // Commits temporary value and closes calendar
}

footerContent?: (actions: FooterActions) => ReactNode;
//              ↑ Your function receives these handlers
//              ↓ You return JSX that wires them to your buttons

// Usage example:
footerContent={(actions) => (
  <div>
    <Button label="Clear" onClick={actions.clear} />
    <Button label="Confirm" onClick={actions.confirm} />
  </div>
)}

// Footer callbacks (optional) - called AFTER design system actions complete
onClear?: () => void;                          // Called after clear completes
onCancel?: () => void;                         // Called after cancel completes
onConfirm?: (value: string | DateRange) => void;  // Called after confirm commits
```

### Common Mistakes

❌ Passing JSX instead of a function:

```
// WRONG - footerContent expects a function, not JSX
<DatePicker
  footerContent={
    <Button label="Confirm" onClick={() => {}} />
  }
/>
```

✅ Correct - Pass a function that returns JSX:

```
<DatePicker
  footerContent={(actions) => (
    <Button label="Confirm" onClick={actions.confirm} />
  )}
/>
```

❌ Not using the actions parameter:

```
// WRONG - Button doesn't trigger design system actions
<DatePicker
  footerContent={(actions) => (
    <Button label="Confirm" onClick={() => console.log("clicked")} />
  )}
/>
```

✅ Correct - Wire actions to your buttons:

```
<DatePicker
  footerContent={(actions) => (
    <Button label="Confirm" onClick={actions.confirm} />
  )}
  onConfirm={(value) => console.log("After confirm:", value)}
/>
```

❌ Trying to manage state in footer manually:

```
// WRONG - Design system already manages state for you
<DatePicker
  footerContent={(actions) => {
    const [tempValue, setTempValue] = useState();  // Don't do this!
    return <Button onClick={() => setTempValue()} />;
  }}
/>
```

✅ Correct - Let design system handle state:

```
<DatePicker
  value={value}  // Design system tracks this
  onChange={(e) => setValue(e.target.value)}
  footerContent={(actions) => (
    <Button onClick={actions.confirm} />  // Just trigger actions
  )}
/>
```

## API Reference

### DatePicker

| Name | Description | Default |
| --- | --- | --- |
| label | Label text displayed above the input.
Provides accessible name for the input.string | - |
| required | boolean | - |
| size | Input size"small""medium""large" | "\"medium\"" |
| state | Input state"success""error""default" | - |
| subText | Helper or error text displayed below the input.
Can be a string or React node for rich content.ReactNode | - |
| inverse | Applies inverse styling for use on dark backgrounds.boolean | false |
| clearable | Shows a clear button to reset the selection.boolean | true |
| defaultValue | Initial value (uncontrolled mode).
Same format as value.stringnumberDateDateRange | - |
| mode | DatePicker mode - single date or range selection"range""single" | "single" |
| value | Current selected value (controlled mode).Single mode: Date, timestamp, or ISO stringRange mode: { start: Date, end: Date }stringnumberDateDateRange | - |
| brandTheme | Override the theme at component level."primary""secondary""tertiary" | "BrandTheme.primary" |
| calendarCount | Number of calendars to display (1 or 2, only works with range mode)number | 1 |
| defaultSelectorType | Default selector type"day""month""year""quarter" | "SelectorType.DAY" |
| picker | Picker granularity (day, month, quarter, year)"day""month""year""quarter" | "SelectorType.DAY" |
| minDate | Earliest selectable date.
Dates before this are disabled.DateValue | - |
| maxDate | Latest selectable date.
Dates after this are disabled.DateValue | - |
| footerContent | Custom footer content renderer.
Receives action handlers for clear, cancel, and confirm.((actions: FooterActions) => ReactNode) | - |
| onClear | Callback fired when selection is cleared.(() => void) | - |
| onCancel | Callback fired when picker is cancelled.(() => void) | - |
| onConfirm | Callback fired when selection is confirmed.((value: string \| DateRange) => void) | - |
| classNames | Custom CSS classes for input sections.({ iconWrapperBefore?: string; iconWrapperAfter?: string; input?: string \| undefined; } & { wrapper?: string \| undefined; label?: string \| undefined; subText?: string \| undefined; }) \| undefined | - |
| noValidate | Disables browser's native validation.
Use when implementing custom validation logic.boolean | false |
| iconAfter | Input iconReactNode | - |
| isFocused | boolean | - |
| filledStateIcon | Uses filled (solid) icons for validation states instead of outlined.boolean | false |
| optionalMessageI18n | Custom text for the "(Optional)" label suffix.
Use for internationalization when field is not required.string | - |
| labelEndSection | Custom content rendered at the end of the label row.
Use for tooltips, info icons, or character counters.ReactNode | - |
| onChange | - | - |

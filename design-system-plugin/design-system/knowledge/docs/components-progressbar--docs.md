---
storybook_id: components-progressbar--docs
title: "Components/ProgressBar"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-progressbar--docs"
import_path: "./src/components/ProgressBar/ProgressBar.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:09:59.295Z
---

# Source: Components/ProgressBar

- Storybook ID: `components-progressbar--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-progressbar--docs
- Import path: `./src/components/ProgressBar/ProgressBar.mdx`
- Capture status: `extracted`

# ProgressBar

The ProgressBar component displays the progress of a task or operation. It provides visual feedback to users about the current status and completion level of ongoing processes.

## Overview

The ProgressBar component is used to show progress of:

- File uploads and downloads
- Data processing operations
- Multi-step workflows
- Loading states with progress indication

Progress bar label

50%

25Mb of 50Mb

## Integration

```
import { ProgressBar } from "@sanofi-accelerator/elements";

const Component = () => (
  <ProgressBar
    value={50}
    label="Progress bar label"
    helperText="25Mb of 50Mb"
  />
);
```

## API Reference

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| value | Current progress value (0-100).
Values outside range are clamped.number | 0 | value050 / 100 |
| label* | Primary label displayed above the progress bar.
Describes what is being tracked.string | - | Progress bar label |
| helperText | Secondary text below the progress bar.
Use for additional context or status info.string | - | 25Mb of 50Mb |
| state | Visual state indicating progress status."success""error""in-progress" | "ProgressBarState.IN_PROGRESS" | stateChoose option...in-progresserrorsuccess |
| size | Height of the progress track."small""medium" | "ProgressBarSize.MEDIUM" | sizeChoose option...smallmedium |
| density | Controls visibility of label and helper text."default""compact""ultra-compact" | "ProgressBarDensity.DEFAULT" | densityChoose option...defaultcompactultra-compact |
| valueText | Custom progress text instead of percentage.
Use for non-percentage formats.string | - |  |
| brandTheme | Override the theme at component level."primary""secondary""tertiary" | "BrandTheme.primary" | brandThemeChoose option...primarysecondarytertiary |

## Anatomy

The ProgressBar component consists of several key elements:

1. Label - Optional text displayed above the progress bar
2. Label Icon - Optional icon next to the label (typically info icon)
3. Progress Bar - The visual progress indicator
4. Progress Indicator - Percentage display (can be customized with valueText prop)
5. Status Icon - Optional icon showing the current state (error, success, loading)
6. Helper Text - Optional text below the progress bar providing additional context

## States

The ProgressBar supports different states to communicate the current status:

- In Progress - The default state showing ongoing progress
- Error - Indicates that an error has occurred during the process
- Success - Indicates successful completion of the process

Progress bar label

50%

25Mb of 50Mb

Progress bar label

Error message goes here.

Progress bar label

Success message goes here.

## Sizes

The ProgressBar component supports different size variants:

Medium size

50%

25Mb of 50Mb

Small size

50%

25Mb of 50Mb

## Densities

The ProgressBar component supports different density variants:

- Default - The default density with a label, percentage (or status icon) and helper text
- Compact - Progress bar and percentage (or status icon) are displayed
- Ultra compact - Only the progress bar is displayed

Default density

50%

25Mb of 50Mb

50%

## Custom Value Text

The ProgressBar component supports custom text instead of the default percentage format. This is useful for showing progress in different formats such as:

- Scoring progress: "5/21" instead of "24%"
- Item completion: "3/10" instead of "30%"
- File upload: "45 MB / 100 MB" instead of "45%"
- Step indicators: "Step 3 of 4"

```
<ProgressBar
  value={24}
  label="Scoring Progress"
  valueText="5/21"
  helperText="5 out of 21 items completed"
/>
```

Scoring Progress

5/21

5 out of 21 items completed

File Upload

45 MB / 100 MB

Uploading...

## Accessibility

The ProgressBar component includes proper accessibility features:

- Uses role="progressbar" for screen readers
- Includes aria-valuenow, aria-valuemin, and aria-valuemax attributes
- Provides descriptive aria-label for the progress state
- Status icons have appropriate semantic meaning

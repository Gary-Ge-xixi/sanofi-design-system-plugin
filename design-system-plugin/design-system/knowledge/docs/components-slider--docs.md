---
storybook_id: components-slider--docs
title: "Components/Slider"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-slider--docs"
import_path: "./src/components/Slider/Slider.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:10:36.753Z
---

# Source: Components/Slider

- Storybook ID: `components-slider--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-slider--docs
- Import path: `./src/components/Slider/Slider.mdx`
- Capture status: `extracted`

# Slider

## A Slider component for selecting a value or range of values.

## Example

## Anatomy

```
import { Slider } from "@sanofi-accelerator/elements";

export default () => (
<Slider
  label="Volume"
  minValue={0}
  maxValue={100}
  step={1}
  showLegend
  legendPosition="top"
/>
);
```

## Features

- Label: Adds a label to the slider for better context.
- Thumb labels: Allows custom aria-labels for each thumb.
- Legend: Displays minimum and maximum values, positioned either at the top or bottom.
- Steps: Displays step marks on the track, controlled by the step prop.

## Accessibility

- Each thumb can have a custom aria-label for better accessibility.
- The tooltip provides a clear indication of the current value while dragging.

## API Reference

### Slider Component

| Name | Description | Default |
| --- | --- | --- |
| label | Accessible label for the slider.string | - |
| thumbLabels | Accessible labels for each thumb (for range sliders).string[] | - |
| showLegend | Shows current value(s) as legend text.boolean | false |
| showSteps | Shows step markers along the track.boolean | false |
| legendPosition | Position of the legend"top""bottom" | "SliderLegendPosition.TOP" |
| minValue | - | - |
| maxValue | - | - |
| step | - | - |

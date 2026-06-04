---
storybook_id: components-grid--docs
title: "Components/Grid"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-grid--docs"
import_path: "./src/components/Grid/Grid.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:08:15.396Z
---

# Source: Components/Grid

- Storybook ID: `components-grid--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-grid--docs
- Import path: `./src/components/Grid/Grid.mdx`
- Capture status: `extracted`

# Grid

## Grid provides a friendly interface to create responsive grid layouts with
ease.

## Example

1

2

3

4

5

6

7

8

## Anatomy

```
import { Grid } from "@sanofi-accelerator/elements";

export default () => (
<Grid.Root>
  <Grid.Item xs={6} xl={3}>1</Grid.Item>
  <Grid.Item xs={6} xl={3}>2</Grid.Item>
  <Grid.Item xs={6} xl={3}>3</Grid.Item>
  <Grid.Item xs={6} xl={3}>4</Grid.Item>
  <Grid.Item sm={4} md={3} lg={2}>5</Grid.Item>
  <Grid.Item sm={4} md={3} lg={2}>6</Grid.Item>
  <Grid.Item sm={4} md={3} lg={4}>7</Grid.Item>
  <Grid.Item sm={12} md={3} lg={4}>8</Grid.Item>
</Grid.Root>
);
```

## API Reference

### Root

> Inherits from div tag

### Item

Each value inherits the value of the previous breakpoint value:

```
<Grid.Item sm={6} xl={3}>
```

Is equivalent to:

```
<Grid.Item xs={12} sm={6} md={6} xl={3} xxl={3} xxxl={3}>
```

| Name | Description | Default |
| --- | --- | --- |
| xs | Column span on xs viewport size218106345791112Show 4 more... | 12 |
| sm | Column span on sm viewport size218106345791112Show 4 more... | - |
| md | Column span on md viewport size218106345791112Show 4 more... | - |
| lg | Column span on lg viewport size218106345791112Show 4 more... | - |
| xl | Column span on xl viewport size218106345791112Show 4 more... | - |
| xxl | Column span on 2xl viewport size218106345791112Show 4 more... | - |
| xxxl | Column span on 3xl viewport size218106345791112Show 4 more... | - |

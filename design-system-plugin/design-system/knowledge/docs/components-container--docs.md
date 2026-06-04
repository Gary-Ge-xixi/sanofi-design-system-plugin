---
storybook_id: components-container--docs
title: "Components/Container"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-container--docs"
import_path: "./src/components/Container/Container.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:07:32.238Z
---

# Source: Components/Container

- Storybook ID: `components-container--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-container--docs
- Import path: `./src/components/Container/Container.mdx`
- Capture status: `extracted`

# Container

## Containers are used to constrain a content's width to the current breakpoint.

## Example

Viewport size: 980

Container size: 762

## Anatomy

```
import { Container } from "@sanofi-accelerator/elements";

export default () => (
<Container>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
</Container>
);
```

## Container fixed width by viewport sizes

| Size | Width |
| --- | --- |
| sm | 414px |
| md | 704px |
| lg | 1184px |
| xl | 1184px |
| 2xl | 1664px |
| 3xl | 1664px |

## API Reference

> Inherits from div tag

| Name | Description | Default |
| --- | --- | --- |
| sm | Set the container type on sm viewport size"fixed""fluid" | "fluid" |
| md | Set the container type on md viewport size"fixed""fluid" | "fluid" |
| lg | Set the container type on lg viewport size"fixed""fluid" | "fluid" |
| xl | Set the container type on xl viewport size"fixed""fluid" | "fluid" |
| xxl | Set the container type on 2xl viewport size"fixed""fluid" | "fixed" |
| xxxl | Set the container type on 3xl viewport size"fixed""fluid" | "fixed" |
| classNames | Custom CSS classes for container elements.{ contentContainer?: string; } | - |

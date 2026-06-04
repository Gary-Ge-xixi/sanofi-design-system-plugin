---
storybook_id: foundations-layout--docs
title: "Foundations/Layout"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/foundations-layout--docs"
import_path: "./src/docs/5-layout.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:12:15.635Z
---

# Source: Foundations/Layout

- Storybook ID: `foundations-layout--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/foundations-layout--docs
- Import path: `./src/docs/5-layout.mdx`
- Capture status: `extracted`

# Layout

Major React components can be used by developers to facilitate the creation of layouts.
You can use the Grid component to create responsive layout using the default Elements Grid.
You can also use the Container component to constrain content using the current breakpoint.

### Breakpoints

Breakpoints are minimum and maximum values used to define a specific range of screen size. These breakpoints are used in responsive to define precisely, for each case, the product behaviors and layout adjustments.

```
Mobile & small tablets - 767 and below

--elements-breakpoint-xs-max: 414px;
--elements-breakpoint-sm-min: 415px;
--elements-breakpoint-sm-max: 767px;

Tablets - 768px - 1279px

--elements-breakpoint-md-min: 768px;
--elements-breakpoint-md-max: 1279px;

Desktops - 1280px and above

--elements-breakpoint-lg-min: 1280px;
--elements-breakpoint-lg-max: 1439px;
--elements-breakpoint-xl-min: 1440px;
--elements-breakpoint-xl-max: 1919px;
--elements-breakpoint-2xl-min: 1920px;
--elements-breakpoint-2xl-max: 3839px;
--elements-breakpoint-3xl-min: 3840px;
```

### Containers

Containers provide a structure for grids and various layouts, setting the content width for pages or specific sections based on each breakpoint. These containers are predefined for our product and can be designed with either fluid or fixed width.

#### Fixed width container

```
--elements-container-width-sm: 414px;
--elements-container-width-md: 704px;
--elements-container-width-lg: 1184px;
--elements-container-width-xl: 1184px;
--elements-container-width-2xl: 1664px;
--elements-container-width-3xl: 1664px;
```

### Spacing

The spacing tokens are used to define the spacing of the components. They are typically used for padding and margin. The naming convention follows the t-shirt sizing system.

```
--elements-spacing-none: 0rem;
--elements-spacing-3xs: 0.125rem;
--elements-spacing-2xs: 0.25rem;
--elements-spacing-xs: 0.5rem;
--elements-spacing-sm: 0.75rem;

--elements-spacing-md: 1rem;

--elements-spacing-lg: 1.25rem;
--elements-spacing-xl: 1.5rem;
--elements-spacing-2xl: 2rem;
--elements-spacing-3xl: 2.5rem;
--elements-spacing-4xl: 3rem;
--elements-spacing-5xl: 4rem;
--elements-spacing-6xl: 8rem;
```

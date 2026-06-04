---
storybook_id: design-tools-theme-playground--docs
title: "Design Tools/Theme Playground"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/design-tools-theme-playground--docs"
import_path: "./src/ThemeProvider/ThemePlayground.stories.tsx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:11:52.362Z
---

# Source: Design Tools/Theme Playground

- Storybook ID: `design-tools-theme-playground--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/design-tools-theme-playground--docs
- Import path: `./src/ThemeProvider/ThemePlayground.stories.tsx`
- Capture status: `extracted`

# Theme Playground

## Theme playground

Inspired by the Radix playground. Toggle brand palettes, spacing density, type scale, motion, breakpoints, and corner radii using live tokens. Copy the generated theme object and drop it into your app to preview how Elements will look with your choices.

#### Form preview

Live components pulling from your token tweaks.

Full name (Optional)

Project tags (Optional)

Team (Optional)

#### Inverse surface

Dark surface demonstrates inverse tokens.

##### Live tokens

Pulls directly from the active CSS variables so you can see the palette your theme is emitting.

##### Type + motion

Preview how font scale and motion tokens feel together.

##### Component variants

Email (Default) (Optional)

Email (Success) (Optional)

Looks good

Email (Error) (Optional)

Please check this field

Email (Inverse) (Optional)

Team (Small) (Optional)

Team (Medium) (Optional)

Team (Large) (Optional)

Team (Error) (Optional)

Branded

Neutral

Branded (selected)

Neutral (selected)

Page 2 of 6

In progress

45%

Appointment date (Optional)

Date range (Optional)

##### Copy the theme

```
import { ThemeProvider, createTheme } from "@sanofi-accelerator/elements";

const theme = createTheme({
  "radius": {
    "sm": "6px",
    "md": "12px",
    "lg": "16px",
    "xl": "22px",
    "rounded": "9999px"
  }
});

<ThemeProvider theme={theme} mode="light">
  {/* app */}
</ThemeProvider>;
```

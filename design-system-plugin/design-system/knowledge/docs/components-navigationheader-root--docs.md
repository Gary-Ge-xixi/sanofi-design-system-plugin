---
storybook_id: components-navigationheader-root--docs
title: "Components/NavigationHeader.Root"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-navigationheader-root--docs"
import_path: "./src/components/NavigationHeader/Root/Root.stories.tsx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:09:35.348Z
---

# Source: Components/NavigationHeader.Root

- Storybook ID: `components-navigationheader-root--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-navigationheader-root--docs
- Import path: `./src/components/NavigationHeader/Root/Root.stories.tsx`
- Capture status: `extracted`

# NavigationHeader.Root

Root component

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| logo | Displays the logo of the NavigationHeader.ReactNode | - |  |
| mobileMenuIcon | Icon displayed on the left of the NavigationHeader when viewport is less than md.ReactNode | - |  |
| mobileMenuFitContent | Set mobile menu to fit content instead of full screen.boolean | false |  |
| sticky | Sets the Root to top sticky.boolean | true |  |
| onSkipToMainAction | Callback to manage focus when skipping to main content (only available when navigating with keyboard).(() => void) | - | - |
| contained | Add a max-width to the Root container.boolean | false |  |
| fullWidth | Make the Root container full width. Takes precedence over contained propboolean | false |  |
| megaMenuTriggerMode | Mega menu trigger behavior (click or hover)."click""hover" | "TriggerMode.CLICK" | megaMenuTriggerModeclickhover |
| isBackgroundBranded | Applies branded background color.boolean | false |  |
| subHeader | Secondary header content below main navigation.ReactNode | - |  |
| burgerMd | Shows burger menu on tablet breakpoint (md: 768-1279px).boolean | false |  |

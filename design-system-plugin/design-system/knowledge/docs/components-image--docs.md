---
storybook_id: components-image--docs
title: "Components/Image"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-image--docs"
import_path: "./src/components/Image/Image.stories.tsx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:08:27.630Z
---

# Source: Components/Image

- Storybook ID: `components-image--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-image--docs
- Import path: `./src/components/Image/Image.stories.tsx`
- Capture status: `extracted`

# Image

Image Component

The Image component is used to display images with optional fallbacks.

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| src* | Image source URL.string | - | https://placehold.co/150 |
| alt* | Alternative text for accessibility.
Required - describes the image for screen readers.string | - | Placeholder image |
| style | Inline styles for the image element.CSSProperties | - |  |
| as | Element type to render as.
Use for custom image components (e.g., Next.js Image).ElementType | img |  |
| title | Tooltip text shown on hover.string | - |  |
| className | Additional CSS class.string | - |  |
| srcSet | Responsive image sources.
Define multiple image sizes for different viewport widths.string | - |  |
| sizes | Media conditions for srcSet selection.string | - |  |
| fallbackSrc | Fallback image URL if primary src fails to load.string | "" |  |

## Stories

### Default

### Overview

| props | results |
| --- | --- |
| src = https://placehold.co/150fallbackSrc = undefined |  |
| src = https://placehold.co/150fallbackSrc = https://placehold.co/200 |  |
| src = https:fallbackSrc = "none" |  |
| src = https:fallbackSrc = https://placehold.co/200 |  |
| src = https:fallbackSrc = |  |

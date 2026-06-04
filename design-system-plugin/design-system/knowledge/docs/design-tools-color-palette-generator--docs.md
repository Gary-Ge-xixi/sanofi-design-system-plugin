---
storybook_id: design-tools-color-palette-generator--docs
title: "Design Tools/Color Palette Generator"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/design-tools-color-palette-generator--docs"
import_path: "./src/DesignTools/ColorPaletteGenerator/ColorPaletteGenerator.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:11:48.059Z
---

# Source: Design Tools/Color Palette Generator

- Storybook ID: `design-tools-color-palette-generator--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/design-tools-color-palette-generator--docs
- Import path: `./src/DesignTools/ColorPaletteGenerator/ColorPaletteGenerator.mdx`
- Capture status: `extracted`

# Color Palette Generator v2

The Color Palette Generator is a tool that allows you to create a comprehensive color palette based on a single base color. It uses an advanced OKLCH color space algorithm to generate a harmonious color scale that can be used in your designs.

## Overview

The current Sanofi brand color system uses a descriptive scale (lightest, lighter, light, base, dark, darker, darkest) for its color palettes. This new tool extends this approach with a numeric scale (50-950) while maintaining compatibility with the existing system.

For more information on why we're implementing this change, please refer to our Migrating to Tokens v2 documentation.

## How the Algorithm Works

The color generation algorithm is based on the following principles:

1. Base Color: The 500 value in the scale is your input color
2. Lighter Shades (50-400):
  - No hue shift is applied (target hue equals the base hue)
  - Lightness is interpolated toward a higher target
  - Chroma (color intensity) is reduced to 50% of the base
  - Keys 50 and 100 are post-processed to ensure consistent lightness (98% and 92% respectively)
3. Darker Shades (600-950):
  - A dynamic hue shift is applied based on the base color's properties
  - Warm colors (hue < 90° or ≥ 300°) get a positive hue shift
  - Cool colors (hue between 90° and 300°) get a negative hue shift
  - Lightness is interpolated down to a low target
  - Chroma is increased to 80% of the base

## Benefits of the New System

- More Granular Control: The numeric scale provides more options for designers
- Better Accessibility: The algorithm ensures appropriate contrast ratios throughout the scale
- Harmony: Colors maintain a consistent relationship across the scale
- Compatibility: The tool maps the new numeric scale back to the traditional descriptive scale

## How to Use

1. Input a base color (500) for either the primary or secondary palette
2. The tool will automatically generate all other shades in the palette
3. Copy the CSS variables to implement in your project

## Color Palette Generator

Generate color palettes using OKLCH color space with scales from 50-950. Learn more about Tokens v2

### Primary Brand

#### OKLCH Scale (50–950)

#### v1 Mapping (lightest–darkest)

These colors can be used with the ThemeProvider to create a consistent theme.

### Theme Configuration

Use this code with the ThemeProvider to apply your color palette to your application.

```
import { ThemeProvider } from '@sanofi-accelerator/elements';

const theme = {
  colors: {
    primary: {
      lightest: '#f9f7fe',
      lighter: '#c7aaff',
      light: '#a06cff',
      base: '#7A00E6',
      dark: '#5500b2',
      darker: '#3b0089',
      darkest: '#20005a',
      lightest_alpha: '#f9f7fe14',
      darkest_alpha: '#20005a14',
    },
  },
};

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* Your app content */}
    </ThemeProvider>
  );
};
```

## Implementation Guidelines

When implementing colors in your design system:

1. Use Variables: Always reference the color tokens through CSS variables
2. Semantic Usage: Consider using semantic color variables that reference these core colors
3. Dark Mode: For dark mode support, you may need to adjust some of the mappings between light and dark variants

## Accessibility Considerations

The generated color scales are designed with accessibility in mind, but always verify contrast ratios when using text on colored backgrounds. In general:

- Use 50-200 as background colors for dark text
- Use 800-950 as background colors for light text
- The base color (500) should be primarily used for UI elements, not large text areas

---
storybook_id: components-themeprovider--docs
title: "Components/ThemeProvider"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-themeprovider--docs"
import_path: "./src/ThemeProvider/ThemeProvider.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:11:04.357Z
---

# Source: Components/ThemeProvider

- Storybook ID: `components-themeprovider--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-themeprovider--docs
- Import path: `./src/ThemeProvider/ThemeProvider.mdx`
- Capture status: `extracted`

# ThemeProvider

For developers seeking personalized control, our theming system offers a straightforward approach to customize variables. The theme prop on the ThemeProvider allows fine-tuning of color shades, border radius, and spacings. Providing this level of customization ensures developers can easily craft unique themes tailored to their application's design needs.

## Overview

To create your theme you need to use the createTheme function from the @sanofi-accelerator/elements package. This function returns a theme object.

The string values in the theme object can be any valid CSS value.

The ThemeProvider is not required if you just want to use the default Sanofi theme.

For advanced theming options, the theme object accepts a brand_secondary color palette. This palette is then available to use in the components that support it via the brandTheme prop set to secondary.

Quick Start with Pre-built Brand Themes:
Instead of creating a custom theme from scratch, you can use the appTheme prop with one of our pre-built brand themes (like AppTheme.DUPIXENT, AppTheme.TZIELD, etc.). See the Available Brand Themes section below for the complete list.

## Available Brand Themes

Elements Design System includes pre-built themes for various Sanofi brands. Use the appTheme prop to apply a complete brand theme:

```
import { ThemeProvider, AppTheme } from "@sanofi-accelerator/elements";

// Apply Dupixent brand theme
<ThemeProvider appTheme={AppTheme.DUPIXENT}>
<App />
</ThemeProvider>

// Or use Tzield theme
<ThemeProvider appTheme={AppTheme.TZIELD}>
<App />
</ThemeProvider>
```

### Available AppTheme Values

#### Sanofi Corporate

- `AppTheme.SANOFI` - Default Sanofi brand theme
- `AppTheme.INTERNAL_TOOLS` - Internal tools theme

#### Product Brands - HCP (Healthcare Professional)

- `AppTheme.COPD_HCP` - COPD Healthcare Professional
- `AppTheme.SARCLISA_HCP` - Sarclisa Healthcare Professional
- `AppTheme.RILZA_HCP` - Rilza Healthcare Professional

#### Product Brands - Patient

- `AppTheme.COPD_PATIENT` - COPD Patient
- `AppTheme.RILZA_PATIENT` - Rilza Patient

#### Product Brands

- `AppTheme.ALTUVIIIO`
- `AppTheme.ALPROLIX`
- `AppTheme.BEYFORTUS`
- `AppTheme.TZIELD`
- `AppTheme.DUPIXENT`
- `AppTheme.ASTHMA`
- `AppTheme.QFITLIA`
- `AppTheme.HEMASSIST`
- `AppTheme.TOLEBRUTINIB`
- `AppTheme.VAXSERVE`
- `AppTheme.VACCINESHOP`

#### Unbranded/Awareness

- `AppTheme.TZIELD_UNBRANDED`
- `AppTheme.DUPIXENT_UNBRANDED`
- `AppTheme.PN_AWARENESS`

> 📖 For more information on theming, including component-level BrandTheme usage, see THEMING.md

## Anatomy

```
const themeConfig = {
color: {
  core: {
    brand: {
      base: "#7a00e6",
      dark: "#5718b0",
      darker: "#3c217b",
      darkest: "#23004c",
      darkest_alpha: "#23004c14",
      light: "#8966db",
      lighter: "#b3a8e6",
      lightest: "#faf5ff",
      lightest_alpha: "#faf5ff14"
    },
    brand_secondary: {
      base: "#007E60",
      dark: "#0D5B44",
      darker: "#0A4836",
      darkest: "#003D2F",
      darkest_alpha: "#003D2F14",
      light: "#31C499",
      lighter: "#8BE2C8",
      lightest: "#F5FFFC",
      lightest_alpha: "#F5FFFC14"
    }
  }
}
}
export const default () => (
<ThemeProvider theme={createTheme(themeConfig)} mode: "light">{app}</ThemeProvider>
);
```

## API Reference

| Name | Description | Default |
| --- | --- | --- |
| children | object | - |
| theme | string \| DeepPartial<Theme> | - |
| mode | "auto""light""dark" | "light" |
| className | string | - |

### Theme object

The theme object is of type ThemeConfig, it is a Partial type of the Theme.
The definition is :

```
export type ThemeConfig = {
  font?: {
    lineheight?: {
      "1"?: string;
      "2"?: string;
      "3"?: string;
      "4"?: string;
      "5"?: string;
      "6"?: string;
      "7"?: string;
      "8"?: string;
      "9"?: string;
      "10"?: string;
      "11"?: string;
    };
    weight?: {
      bold?: string;
      regular?: string;
      light?: string;
    };
    size?: {
      "100"?: string;
      "200"?: string;
      "300"?: string;
      "400"?: string;
      "500"?: string;
      "600"?: string;
      "700"?: string;
      "800"?: string;
      "900"?: string;
      "1000"?: string;
      "1100"?: string;
      "1200"?: string;
      "1300"?: string;
      "1400"?: string;
      "1500"?: string;
    };
    family?: {
      serif?: string;
      sans?: string;
    };
  };
  color?: {
    core?: {
      neutral?: {
        "50"?: string;
        "100"?: string;
        "200"?: string;
        "300"?: string;
        "400"?: string;
        "500"?: string;
        "600"?: string;
        "700"?: string;
        "800"?: string;
        "900"?: string;
        white?: string;
        black?: string;
      };
      brand?: {
        base?: string;
        lightest?: string;
        dark?: string;
        darkest?: string;
        light?: string;
        darker?: string;
        lightest_alpha?: string;
        lighter?: string;
        darkest_alpha?: string;
      };
      blue?: {
        lightest?: string;
        lightest_alpha?: string;
        dark?: string;
        lighter?: string;
        darker?: string;
        darkest_alpha?: string;
        light?: string;
        base?: string;
        darkest?: string;
      };
      green?: {
        light?: string;
        darker?: string;
        darkest_alpha?: string;
        base?: string;
        darkest?: string;
        lighter?: string;
        lightest?: string;
        dark?: string;
        lightest_alpha?: string;
      };
      red?: {
        light?: string;
        base?: string;
        darker?: string;
        dark?: string;
        lightest?: string;
        darkest?: string;
        lightest_alpha?: string;
        darkest_alpha?: string;
        lighter?: string;
      };
      orange?: {
        base?: string;
        dark?: string;
        light?: string;
        lighter?: string;
        darker?: string;
        darkest_alpha?: string;
        lightest?: string;
        darkest?: string;
        lightest_alpha?: string;
      };
    };
    semantic?: {
      accent?: {
        disabled?: string;
        default?: string;
        hover?: string;
        inverse_hover?: string;
        focus?: string;
        active?: string;
        inverse?: string;
      };
      background?: {
        subtle?: string;
        infoSubtle?: string;
        error?: string;
        default?: string;
        alert?: string;
        overlayWhiteStrong?: string;
        overlayBlackStrong?: string;
        overlayWhiteLight?: string;
        errorSubtle?: string;
        brand?: string;
        successSubtle?: string;
        overlayBlackLight?: string;
        success?: string;
        alertSubtle?: string;
        info?: string;
      };
      text?: {
        highlight_inverse?: string;
        default?: string;
        success_inverse?: string;
        accentDefault?: string;
        error_inverse?: string;
        accentHover?: string;
        info?: string;
        disabled?: string;
        subtle_inverse?: string;
        helper?: string;
        helper_inverse?: string;
        disabled_inverse?: string;
        subtle?: string;
        highlight?: string;
        strong?: string;
        accentActive?: string;
        alert_inverse?: string;
        error?: string;
        info_inverse?: string;
        alert?: string;
        success?: string;
        default_inverse?: string;
      };
      border?: {
        default?: string;
        highlight?: string;
        error?: string;
        success?: string;
        subtle?: string;
      };
      destruct?: {
        active_inverse?: string;
        default?: string;
        hover_inverse?: string;
        hover?: string;
        active?: string;
        default_inverse?: string;
      };
    };
  };
  motion?: {
    duration?: {
      "150"?: string;
      "300"?: string;
      "500"?: string;
      "750"?: string;
      "1000"?: string;
      "1500"?: string;
      "2500"?: string;
    };
    ease?: {
      linear?: string;
      outBounce?: string;
      out?: string;
      inOut?: string;
      inOutBounce?: string;
      in?: string;
      inBounce?: string;
    };
  };
  radius?: {
    none?: string;
    sm?: string;
    rounded?: string;
    md?: string;
    xl?: string;
    lg?: string;
  };
  spacing?: {
    lg?: string;
    xl?: string;
    "3xl"?: string;
    "5xl"?: string;
    sm?: string;
    "4xl"?: string;
    md?: string;
    xs?: string;
    none?: string;
    "6xl"?: string;
    "2xs"?: string;
    "3xs"?: string;
    "2xl"?: string;
  };
}
```

## Dark mode

The optional prop mode can be set to light, dark or auto:

- light will use the light theme (which is the default)
- dark will use the dark theme
- auto will use the system preference

```
import { ThemeProvider, createTheme } from "@sanofi-accelerator/elements";

export const default () => (
<ThemeProvider mode="dark">
  {app}
</ThemeProvider>
);
```

---
storybook_id: hooks-usetheme--docs
title: "Hooks/useTheme"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/hooks-usetheme--docs"
import_path: "./src/ThemeProvider/useTheme.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:12:56.631Z
---

# Source: Hooks/useTheme

- Storybook ID: `hooks-usetheme--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/hooks-usetheme--docs
- Import path: `./src/ThemeProvider/useTheme.mdx`
- Capture status: `extracted`

# useTheme

## The useTheme hook provides a way to access the current theme object. This
object contains all the theme variables that are used in the components. It is
useful when you need to access the theme variables in your runtime.

### Usage

```
import { useTheme } from "@sanofi-accelerator/elements";

const MyComponent = () => {
  const theme = useTheme();
  return <div style={{ color: theme.color.core.brand.base }}>Hello World</div>;
};
```

### Theme object

## The theme object expose all style tokens, its definition is :

```
export type Theme = {
  font: {
    lineheight: {
      "1": string;
      "2": string;
      "3": string;
      "4": string;
      "5": string;
      "6": string;
      "7": string;
      "8": string;
      "9": string;
      "10": string;
      "11": string;
    };
    weight: {
      bold: string;
      regular: string;
      light: string;
    };
    size: {
      "100": string;
      "200": string;
      "300": string;
      "400": string;
      "500": string;
      "600": string;
      "700": string;
      "800": string;
      "900": string;
      "1000": string;
      "1100": string;
      "1200": string;
      "1300": string;
      "1400": string;
      "1500": string;
    };
    family: {
      serif: string;
      sans: string;
    };
  };
  color: {
    core: {
      neutral: {
        "50": string;
        "100": string;
        "200": string;
        "300": string;
        "400": string;
        "500": string;
        "600": string;
        "700": string;
        "800": string;
        "900": string;
        white: string;
        black: string;
      };
      brand: {
        base: string;
        lightest: string;
        dark: string;
        darkest: string;
        light: string;
        darker: string;
        lightest_alpha: string;
        lighter: string;
        darkest_alpha: string;
      };
      blue: {
        lightest: string;
        lightest_alpha: string;
        dark: string;
        lighter: string;
        darker: string;
        darkest_alpha: string;
        light: string;
        base: string;
        darkest: string;
      };
      green: {
        light: string;
        darker: string;
        darkest_alpha: string;
        base: string;
        darkest: string;
        lighter: string;
        lightest: string;
        dark: string;
        lightest_alpha: string;
      };
      red: {
        light: string;
        base: string;
        darker: string;
        dark: string;
        lightest: string;
        darkest: string;
        lightest_alpha: string;
        darkest_alpha: string;
        lighter: string;
      };
      orange: {
        base: string;
        dark: string;
        light: string;
        lighter: string;
        darker: string;
        darkest_alpha: string;
        lightest: string;
        darkest: string;
        lightest_alpha: string;
      };
    };
    semantic: {
      accent: {
        disabled: string;
        default: string;
        hover: string;
        inverse_hover: string;
        focus: string;
        active: string;
        inverse: string;
      };
      background: {
        subtle: string;
        infoSubtle: string;
        error: string;
        default: string;
        alert: string;
        overlayWhiteStrong: string;
        overlayBlackStrong: string;
        overlayWhiteLight: string;
        errorSubtle: string;
        brand: string;
        successSubtle: string;
        overlayBlackLight: string;
        success: string;
        alertSubtle: string;
        info: string;
      };
      text: {
        highlight_inverse: string;
        default: string;
        success_inverse: string;
        accentDefault: string;
        error_inverse: string;
        accentHover: string;
        info: string;
        disabled: string;
        subtle_inverse: string;
        helper: string;
        helper_inverse: string;
        disabled_inverse: string;
        subtle: string;
        highlight: string;
        strong: string;
        accentActive: string;
        alert_inverse: string;
        error: string;
        info_inverse: string;
        alert: string;
        success: string;
        default_inverse: string;
      };
      border: {
        default: string;
        highlight: string;
        error: string;
        success: string;
        subtle: string;
      };
      destruct: {
        active_inverse: string;
        default: string;
        hover_inverse: string;
        hover: string;
        active: string;
        default_inverse: string;
      };
    };
  };
  motion: {
    duration: {
      "150": string;
      "300": string;
      "500": string;
      "750": string;
      "1000": string;
      "1500": string;
      "2500": string;
    };
    ease: {
      linear: string;
      outBounce: string;
      out: string;
      inOut: string;
      inOutBounce: string;
      in: string;
      inBounce: string;
    };
  };
  radius: {
    none: string;
    sm: string;
    rounded: string;
    md: string;
    xl: string;
    lg: string;
  };
  spacing: {
    lg: string;
    xl: string;
    "3xl": string;
    "5xl": string;
    sm: string;
    "4xl": string;
    md: string;
    xs: string;
    none: string;
    "6xl": string;
    "2xs": string;
    "3xs": string;
    "2xl": string;
  };
};
```

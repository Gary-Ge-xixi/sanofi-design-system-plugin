---
storybook_id: foundations-theming--docs
title: "Foundations/Theming"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/foundations-theming--docs"
import_path: "./src/docs/2-theming.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:12:27.657Z
---

# Source: Foundations/Theming

- Storybook ID: `foundations-theming--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/foundations-theming--docs
- Import path: `./src/docs/2-theming.mdx`
- Capture status: `extracted`

# Theming

By default the Elements Design System is styled by the Sanofi brand theme.
The base theme is applied on:

- Colors
- Typography
- Layout
- Spacings
- Radius

## Using the tokens

Styles are accessible via 2 major methods: CSS Variables and JS tokens.

### CSS variables usage

In your CSS definition, if you want to add any color token on your custom component, you can directly call them by using the CSS variable.

```
.wrapper {
  background-color: var(--elements-color-semantic-background-default);
}
```

### Fetching theme values

The useTheme hook provides a way to access the current theme object.
This object contains all the theme variables that are used in the components.
It is useful when you need to access the theme variables in your runtime.
Details can be found in the useTheme documentation

#### Example of usage

```
import { useTheme } from "@sanofi-accelerator/elements";

const MyComponent = () => {
  const theme = useTheme();
  return <div style={{ color: theme.color.core.brand.base }}>Hello World</div>;
};
```

## Available Themes

Elements Design System provides two types of theming approaches:

### BrandTheme (Component-level)

Apply brand colors to individual components without wrapping your entire application:

```
import { Button, ButtonVariant, BrandTheme } from "@sanofi-accelerator/elements";

<Button
  variant={ButtonVariant.PRIMARY}
  brandTheme={BrandTheme.secondary}
  label="Action"
/>
```

Available values:

- BrandTheme.primary - Primary brand colors (default)
- BrandTheme.secondary - Secondary brand colors
- BrandTheme.tertiary - Tertiary brand colors

### AppTheme (Application-level)

Apply a complete brand theme across your entire application using the ThemeProvider:

```
import { ThemeProvider, AppTheme } from "@sanofi-accelerator/elements";

<ThemeProvider appTheme={AppTheme.DUPIXENT}>
  <App />
</ThemeProvider>
```

Available brand themes:

- Sanofi Corporate: SANOFI, INTERNAL_TOOLS
- HCP (Healthcare Professional): COPD_HCP, SARCLISA_HCP, RILZA_HCP
- Patient: COPD_PATIENT, RILZA_PATIENT
- Product Brands: ALTUVIIIO, ALPROLIX, BEYFORTUS, TZIELD, DUPIXENT, ASTHMA, QFITLIA, HEMASSIST, TOLEBRUTINIB, VAXSERVE, VACCINESHOP
- Unbranded/Awareness: TZIELD_UNBRANDED, DUPIXENT_UNBRANDED, PN_AWARENESS

> 📖 For complete theme documentation, including all available themes and detailed usage examples, see THEMING.md in the repository.

## Overriding the theme

The ThemeProvider component can be used to override the default Sanofi brand theme.
Refer to the dedicated documentation for details on how to use the component: ThemeProvider.

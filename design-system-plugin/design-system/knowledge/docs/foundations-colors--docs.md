---
storybook_id: foundations-colors--docs
title: "Foundations/Colors"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/foundations-colors--docs"
import_path: "./src/docs/3-colors.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:11:57.654Z
---

# Source: Foundations/Colors

- Storybook ID: `foundations-colors--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/foundations-colors--docs
- Import path: `./src/docs/3-colors.mdx`
- Capture status: `extracted`

# Colors

The Elements color system is built upon the Sanofi branding.
For more resources on Sanofi brand, follow this link to access the Brand Portal
We use Design Tokens that are organized in two main categories: Primitives and Semantics

## Primitives

This the main source of all the color tokens. We use core colors to define our palettes.
These colors are mostly context-agnostic, and should not be used before visiting other color tokens.

### Brand

#### Tokens

```
/* Brand Primary */
--elements-core-brand-base: rgba(122, 0, 230, 1);
--elements-core-brand-dark: rgba(87, 24, 176, 1);
--elements-core-brand-darker: rgba(60, 33, 123, 1);
--elements-core-brand-darkest: rgba(35, 0, 76, 1);
--elements-core-brand-darkest_alpha: rgba(35, 0, 76, 0.08);
--elements-core-brand-light: rgba(137, 102, 219, 1);
--elements-core-brand-lighter: rgba(179, 168, 230, 1);
--elements-core-brand-lightest: rgba(250, 245, 255, 1);
--elements-core-brand-lightest_alpha: rgba(250, 245, 255, 0.08);

/* Brand Secondary */
--elements-core-brand-secondary-base: rgba(122, 0, 230, 1);
--elements-core-brand-secondary-dark: rgba(87, 24, 176, 1);
--elements-core-brand-secondary-darker: rgba(60, 33, 123, 1);
--elements-core-brand-secondary-darkest: rgba(35, 0, 76, 1);
--elements-core-brand-secondary-darkest_alpha: rgba(35, 0, 76, 0.08);
--elements-core-brand-secondary-light: rgba(137, 102, 219, 1);
--elements-core-brand-secondary-lighter: rgba(179, 168, 230, 1);
--elements-core-brand-secondary-lightest: rgba(250, 245, 255, 1);
--elements-core-brand-secondary-lightest_alpha: rgba(250, 245, 255, 0.08);

/* Brand Tertiary */
--elements-core-brand-tertiary-base: rgba(122, 0, 230, 1);
--elements-core-brand-tertiary-dark: rgba(87, 24, 176, 1);
--elements-core-brand-tertiary-darker: rgba(60, 33, 123, 1);
--elements-core-brand-tertiary-darkest: rgba(35, 0, 76, 1);
--elements-core-brand-tertiary-darkest_alpha: rgba(35, 0, 76, 0.08);
--elements-core-brand-tertiary-light: rgba(137, 102, 219, 1);
--elements-core-brand-tertiary-lighter: rgba(179, 168, 230, 1);
--elements-core-brand-tertiary-lightest: rgba(250, 245, 255, 1);
--elements-core-brand-tertiary-lightest_alpha: rgba(250, 245, 255, 0.08);

/* Brand Aliases (reference the core brand tokens) */
--elements-color-core-brand-base: var(--elements-core-brand-base);
--elements-color-core-brand-dark: var(--elements-core-brand-dark);
--elements-color-core-brand-darker: var(--elements-core-brand-darker);
--elements-color-core-brand-darkest: var(--elements-core-brand-darkest);
--elements-color-core-brand-darkest_alpha: var(
  --elements-core-brand-darkest_alpha
);
--elements-color-core-brand-light: var(--elements-core-brand-light);
--elements-color-core-brand-lighter: var(--elements-core-brand-lighter);
--elements-color-core-brand-lightest: var(--elements-core-brand-lightest);
--elements-color-core-brand-lightest_alpha: var(
  --elements-core-brand-lightest_alpha
);
```

### Neutrals

```
--elements-color-core-neutral-white: rgba(255, 255, 255, 1);
--elements-color-core-neutral-50: rgba(245, 245, 245, 1);
--elements-color-core-neutral-100: rgba(228, 228, 228, 1);
--elements-color-core-neutral-200: rgba(201, 201, 201, 1);
--elements-color-core-neutral-300: rgba(174, 174, 174, 1);
--elements-color-core-neutral-400: rgba(147, 147, 147, 1);
--elements-color-core-neutral-500: rgba(117, 117, 117, 1);
--elements-color-core-neutral-600: rgba(93, 93, 93, 1);
--elements-color-core-neutral-700: rgba(67, 67, 67, 1);
--elements-color-core-neutral-800: rgba(40, 40, 40, 1);
--elements-color-core-neutral-900: rgba(23, 23, 23, 1);
--elements-color-core-neutral-950: rgba(10, 10, 10, 1);
--elements-color-core-neutral-black: rgba(0, 0, 0, 1);
```

### Alerting

```
/* Red */
--elements-color-core-red-base: rgba(215, 43, 63, 1);
--elements-color-core-red-dark: rgba(180, 35, 24, 1);
--elements-color-core-red-darker: rgba(145, 32, 24, 1);
--elements-color-core-red-darkest: rgba(85, 22, 12, 1);
--elements-color-core-red-darkest_alpha: rgba(85, 22, 12, 0.08);
--elements-color-core-red-light: rgba(249, 112, 102, 1);
--elements-color-core-red-lighter: rgba(254, 205, 202, 1);
--elements-color-core-red-lightest: rgba(255, 251, 250, 1);
--elements-color-core-red-lightest_alpha: rgba(255, 251, 250, 0.08);

/* Green */
--elements-color-core-green-base: rgba(7, 148, 85, 1);
--elements-color-core-green-dark: rgba(6, 118, 71, 1);
--elements-color-core-green-darker: rgba(7, 77, 49, 1);
--elements-color-core-green-darkest: rgba(5, 51, 33, 1);
--elements-color-core-green-darkest_alpha: rgba(5, 51, 33, 0.08);
--elements-color-core-green-light: rgba(71, 205, 137, 1);
--elements-color-core-green-lighter: rgba(169, 239, 197, 1);
--elements-color-core-green-lightest: rgba(246, 254, 249, 1);
--elements-color-core-green-lightest_alpha: rgba(246, 254, 249, 0.08);

/* Orange */
--elements-color-core-orange-base: rgba(238, 116, 4, 1);
--elements-color-core-orange-dark: rgba(181, 71, 8, 1);
--elements-color-core-orange-darker: rgba(147, 55, 13, 1);
--elements-color-core-orange-darkest: rgba(78, 29, 9, 1);
--elements-color-core-orange-darkest_alpha: rgba(78, 29, 9, 0.08);
--elements-color-core-orange-light: rgba(253, 176, 34, 1);
--elements-color-core-orange-lighter: rgba(254, 223, 137, 1);
--elements-color-core-orange-lightest: rgba(255, 252, 245, 1);
--elements-color-core-orange-lightest_alpha: rgba(255, 252, 245, 0.08);

/* Blue */
--elements-color-core-blue-base: rgba(21, 112, 239, 1);
--elements-color-core-blue-dark: rgba(23, 92, 211, 1);
--elements-color-core-blue-darker: rgba(25, 65, 133, 1);
--elements-color-core-blue-darkest: rgba(16, 42, 86, 1);
--elements-color-core-blue-darkest_alpha: rgba(16, 42, 86, 0.08);
--elements-color-core-blue-light: rgba(83, 177, 253, 1);
--elements-color-core-blue-lighter: rgba(178, 221, 255, 1);
--elements-color-core-blue-lightest: rgba(245, 250, 255, 1);
--elements-color-core-blue-lightest_alpha: rgba(245, 250, 255, 0.08);
```

## Semantics

These tokens reflect design decisions.

They give the color direction on which properties it can be used.
These colors are meant for general usage, and don't define specific UI components.

These colors are Alias tokens, meaning that they use primitive tokens to define their value instead of absolute values.

### Accent

Accent tokens define interactive element colors for different states.

```
/* Primary Accent */
--elements-color-semantic-accent-default: var(--elements-color-core-brand-base);
--elements-color-semantic-accent-hover: var(--elements-color-core-brand-dark);
--elements-color-semantic-accent-active: var(
  --elements-color-core-brand-darker
);
--elements-color-semantic-accent-focus: var(--elements-color-core-brand-darker);
--elements-color-semantic-accent-disabled: var(
  --elements-color-core-neutral-300
);
--elements-color-semantic-accent-inverse: var(
  --elements-color-core-neutral-white
);
--elements-color-semantic-accent-inverse_hover: var(
  --elements-color-core-brand-lightest
);

/* Neutral Accent */
--elements-color-semantic-accent-neutral_default: var(
  --elements-color-core-neutral-800
);
--elements-color-semantic-accent-neutral_hover: var(
  --elements-color-core-neutral-900
);
--elements-color-semantic-accent-neutral_active: var(
  --elements-color-core-neutral-950
);

/* Status Accent */
--elements-color-semantic-accent-error_default: var(
  --elements-color-core-red-dark
);
--elements-color-semantic-accent-error_hover: var(
  --elements-color-core-red-darker
);
--elements-color-semantic-accent-success_default: var(
  --elements-color-core-green-dark
);
--elements-color-semantic-accent-success_hover: var(
  --elements-color-core-green-darker
);
--elements-color-semantic-accent-alert_default: var(
  --elements-color-core-orange-dark
);
--elements-color-semantic-accent-alert_hover: var(
  --elements-color-core-orange-darker
);
--elements-color-semantic-accent-info_default: var(
  --elements-color-core-blue-dark
);
--elements-color-semantic-accent-info_hover: var(
  --elements-color-core-blue-darker
);
```

### Destruct

Tokens for destructive actions like delete buttons.

```
--elements-color-semantic-destruct-default: var(--elements-color-core-red-base);
--elements-color-semantic-destruct-hover: var(--elements-color-core-red-dark);
--elements-color-semantic-destruct-active: var(
  --elements-color-core-red-darker
);
--elements-color-semantic-destruct-default_inverse: var(
  --elements-color-core-red-light
);
--elements-color-semantic-destruct-hover_inverse: var(
  --elements-color-core-red-lighter
);
--elements-color-semantic-destruct-active_inverse: var(
  --elements-color-core-red-lightest
);
```

### Backgrounds

```
/* Default */
--elements-color-semantic-background-default: var(
  --elements-color-core-neutral-white
);
--elements-color-semantic-background-subtle: var(
  --elements-color-core-neutral-50
);

/* Brand */
--elements-color-semantic-background-brand: var(
  --elements-color-core-brand-base
);
--elements-color-semantic-background-brand-subtle: var(
  --elements-color-core-brand-lightest
);

/* Neutral */
--elements-color-semantic-background-neutral: var(
  --elements-color-core-neutral-800
);
--elements-color-semantic-background-neutral-subtle: var(
  --elements-color-core-neutral-50
);

/* Status */
--elements-color-semantic-background-error: var(--elements-color-core-red-base);
--elements-color-semantic-background-error-subtle: var(
  --elements-color-core-red-lightest
);
--elements-color-semantic-background-success: var(
  --elements-color-core-green-base
);
--elements-color-semantic-background-success-subtle: var(
  --elements-color-core-green-lightest
);
--elements-color-semantic-background-alert: var(
  --elements-color-core-orange-base
);
--elements-color-semantic-background-alert-subtle: var(
  --elements-color-core-orange-lightest
);
--elements-color-semantic-background-info: var(--elements-color-core-blue-base);
--elements-color-semantic-background-info-subtle: var(
  --elements-color-core-blue-lightest
);

/* Overlay */
--elements-color-semantic-background-overlay-black-light: rgba(0, 0, 0, 0.32);
--elements-color-semantic-background-overlay-black-strong: rgba(0, 0, 0, 0.56);
--elements-color-semantic-background-overlay-black-ultra_strong: rgba(
  0,
  0,
  0,
  0.88
);
--elements-color-semantic-background-overlay-white-light: rgba(
  255,
  255,
  255,
  0.32
);
--elements-color-semantic-background-overlay-white-strong: rgba(
  255,
  255,
  255,
  0.56
);
--elements-color-semantic-background-overlay-white-ultra_strong: rgba(
  255,
  255,
  255,
  0.88
);
```

### Borders

```
--elements-color-semantic-border-default: var(
  --elements-color-core-neutral-600
);
--elements-color-semantic-border-subtle: var(--elements-color-core-neutral-200);
--elements-color-semantic-border-highlight: var(
  --elements-color-core-brand-darkest
);
--elements-color-semantic-border-error: var(--elements-color-core-red-base);
--elements-color-semantic-border-success: var(--elements-color-core-green-base);
--elements-color-semantic-border-warning: var(
  --elements-color-core-orange-base
);
--elements-color-semantic-border-info: var(--elements-color-core-blue-base);
```

### Text and Icons

```
/* Default */
--elements-color-semantic-text-default: var(--elements-color-core-neutral-900);
--elements-color-semantic-text-default_inverse: var(
  --elements-color-core-neutral-white
);

/* Subtle */
--elements-color-semantic-text-subtle: var(--elements-color-core-neutral-600);
--elements-color-semantic-text-subtle_inverse: var(
  --elements-color-core-neutral-300
);

/* Strong */
--elements-color-semantic-text-strong: var(--elements-color-core-neutral-black);

/* Disabled */
--elements-color-semantic-text-disabled: var(--elements-color-core-neutral-300);
--elements-color-semantic-text-disabled_inverse: var(
  --elements-color-core-neutral-600
);

/* Helper */
--elements-color-semantic-text-helper: var(--elements-color-core-neutral-600);
--elements-color-semantic-text-helper_inverse: var(
  --elements-color-core-neutral-300
);

/* Highlight */
--elements-color-semantic-text-highlight: var(
  --elements-color-core-brand-darkest
);
--elements-color-semantic-text-highlight_inverse: var(
  --elements-color-core-brand-lightest
);

/* Accent Text */
--elements-color-semantic-text-accent-default: var(
  --elements-color-core-brand-base
);
--elements-color-semantic-text-accent-hover: var(
  --elements-color-core-brand-dark
);
--elements-color-semantic-text-accent-active: var(
  --elements-color-core-brand-dark
);

/* Error Text */
--elements-color-semantic-text-error: var(--elements-color-core-red-dark);
--elements-color-semantic-text-error_inverse: var(
  --elements-color-core-red-light
);
--elements-color-semantic-text-error-strong: var(
  --elements-color-core-red-darker
);
--elements-color-semantic-text-error-subtle: var(
  --elements-color-core-red-lightest
);

/* Success Text */
--elements-color-semantic-text-success: var(--elements-color-core-green-dark);
--elements-color-semantic-text-success_inverse: var(
  --elements-color-core-green-light
);
--elements-color-semantic-text-success-strong: var(
  --elements-color-core-green-darker
);
--elements-color-semantic-text-success-subtle: var(
  --elements-color-core-green-lightest
);

/* Alert Text */
--elements-color-semantic-text-alert: var(--elements-color-core-orange-dark);
--elements-color-semantic-text-alert_inverse: var(
  --elements-color-core-orange-light
);
--elements-color-semantic-text-alert-strong: var(
  --elements-color-core-orange-darker
);
--elements-color-semantic-text-alert-subtle: var(
  --elements-color-core-orange-lightest
);

/* Info Text */
--elements-color-semantic-text-info: var(--elements-color-core-blue-dark);
--elements-color-semantic-text-info_inverse: var(
  --elements-color-core-blue-light
);
--elements-color-semantic-text-info-strong: var(
  --elements-color-core-blue-darker
);
--elements-color-semantic-text-info-subtle: var(
  --elements-color-core-blue-lightest
);
```

## Data Visualization Colors

These tokens are specifically designed for charts, graphs, and data visualizations to ensure accessibility and visual distinction.

### Core Data Colors

### Categorical Colors

Use these for distinguishing different categories in visualizations.

```
--elements-color-data-categorical-1: var(--elements-color-core-data-blue-500);
--elements-color-data-categorical-2: var(--elements-color-core-data-orange-500);
--elements-color-data-categorical-3: var(--elements-color-core-data-teal-600);
--elements-color-data-categorical-4: var(--elements-color-core-data-purple-700);
--elements-color-data-categorical-5: var(--elements-color-core-data-yellow-500);
--elements-color-data-categorical-6: var(--elements-color-core-data-cyan-500);
--elements-color-data-categorical-7: var(--elements-color-core-data-pink-600);
--elements-color-data-categorical-8: var(--elements-color-core-data-brown-500);
--elements-color-data-categorical-9: var(--elements-color-core-data-indigo-600);
--elements-color-data-categorical-10: var(--elements-color-core-data-mint-500);
--elements-color-data-categorical-11: var(--elements-color-core-data-red-500);
--elements-color-data-categorical-12: var(--elements-color-core-data-green-500);
```

### Sequential Colors

Use these for representing ordered data from low to high values.

```
/* Blue Sequential */
--elements-color-data-sequential-blue-1: var(
  --elements-color-core-data-blue-100
);
--elements-color-data-sequential-blue-2: var(
  --elements-color-core-data-blue-300
);
--elements-color-data-sequential-blue-3: var(
  --elements-color-core-data-blue-500
);
--elements-color-data-sequential-blue-4: var(
  --elements-color-core-data-blue-700
);
--elements-color-data-sequential-blue-5: var(
  --elements-color-core-data-blue-900
);

/* Green Sequential */
--elements-color-data-sequential-green-1: var(
  --elements-color-core-data-green-100
);
--elements-color-data-sequential-green-2: var(
  --elements-color-core-data-green-300
);
--elements-color-data-sequential-green-3: var(
  --elements-color-core-data-green-500
);
--elements-color-data-sequential-green-4: var(
  --elements-color-core-data-green-700
);
--elements-color-data-sequential-green-5: var(
  --elements-color-core-data-green-900
);

/* Orange Sequential */
--elements-color-data-sequential-orange-1: var(
  --elements-color-core-data-orange-100
);
--elements-color-data-sequential-orange-2: var(
  --elements-color-core-data-orange-300
);
--elements-color-data-sequential-orange-3: var(
  --elements-color-core-data-orange-500
);
--elements-color-data-sequential-orange-4: var(
  --elements-color-core-data-orange-700
);
--elements-color-data-sequential-orange-5: var(
  --elements-color-core-data-orange-900
);

/* Purple Sequential */
--elements-color-data-sequential-purple-1: var(
  --elements-color-core-data-purple-100
);
--elements-color-data-sequential-purple-2: var(
  --elements-color-core-data-purple-300
);
--elements-color-data-sequential-purple-3: var(
  --elements-color-core-data-purple-500
);
--elements-color-data-sequential-purple-4: var(
  --elements-color-core-data-purple-700
);
--elements-color-data-sequential-purple-5: var(
  --elements-color-core-data-purple-900
);

/* Red Sequential */
--elements-color-data-sequential-red-1: var(--elements-color-core-data-red-100);
--elements-color-data-sequential-red-2: var(--elements-color-core-data-red-300);
--elements-color-data-sequential-red-3: var(--elements-color-core-data-red-500);
--elements-color-data-sequential-red-4: var(--elements-color-core-data-red-700);
--elements-color-data-sequential-red-5: var(--elements-color-core-data-red-900);

/* Neutral Sequential */
--elements-color-data-sequential-neutral-1: var(
  --elements-color-core-data-neutral-100
);
--elements-color-data-sequential-neutral-2: var(
  --elements-color-core-data-neutral-300
);
--elements-color-data-sequential-neutral-3: var(
  --elements-color-core-data-neutral-500
);
--elements-color-data-sequential-neutral-4: var(
  --elements-color-core-data-neutral-700
);
--elements-color-data-sequential-neutral-5: var(
  --elements-color-core-data-neutral-900
);
```

### Diverging Colors

Use these for data with a meaningful midpoint (e.g., positive/negative values).

```
/* Blue-Orange Diverging */
--elements-color-data-diverging-blue-orange-1: var(
  --elements-color-core-data-blue-800
);
--elements-color-data-diverging-blue-orange-2: var(
  --elements-color-core-data-blue-600
);
--elements-color-data-diverging-blue-orange-3: var(
  --elements-color-core-data-blue-400
);
--elements-color-data-diverging-blue-orange-4: var(
  --elements-color-core-data-blue-200
);
--elements-color-data-diverging-blue-orange-5: var(
  --elements-color-core-data-neutral-50
);
--elements-color-data-diverging-blue-orange-6: var(
  --elements-color-core-data-orange-200
);
--elements-color-data-diverging-blue-orange-7: var(
  --elements-color-core-data-orange-400
);
--elements-color-data-diverging-blue-orange-8: var(
  --elements-color-core-data-orange-600
);
--elements-color-data-diverging-blue-orange-9: var(
  --elements-color-core-data-orange-800
);

/* Green-Red Diverging */
--elements-color-data-diverging-green-red-1: var(
  --elements-color-core-data-green-800
);
--elements-color-data-diverging-green-red-2: var(
  --elements-color-core-data-green-600
);
--elements-color-data-diverging-green-red-3: var(
  --elements-color-core-data-green-400
);
--elements-color-data-diverging-green-red-4: var(
  --elements-color-core-data-green-200
);
--elements-color-data-diverging-green-red-5: var(
  --elements-color-core-data-neutral-50
);
--elements-color-data-diverging-green-red-6: var(
  --elements-color-core-data-red-200
);
--elements-color-data-diverging-green-red-7: var(
  --elements-color-core-data-red-400
);
--elements-color-data-diverging-green-red-8: var(
  --elements-color-core-data-red-600
);
--elements-color-data-diverging-green-red-9: var(
  --elements-color-core-data-red-800
);

/* Purple-Green Diverging */
--elements-color-data-diverging-purple-green-1: var(
  --elements-color-core-data-purple-800
);
--elements-color-data-diverging-purple-green-2: var(
  --elements-color-core-data-purple-600
);
--elements-color-data-diverging-purple-green-3: var(
  --elements-color-core-data-purple-400
);
--elements-color-data-diverging-purple-green-4: var(
  --elements-color-core-data-purple-200
);
--elements-color-data-diverging-purple-green-5: var(
  --elements-color-core-data-neutral-50
);
--elements-color-data-diverging-purple-green-6: var(
  --elements-color-core-data-green-200
);
--elements-color-data-diverging-purple-green-7: var(
  --elements-color-core-data-green-400
);
--elements-color-data-diverging-purple-green-8: var(
  --elements-color-core-data-green-600
);
--elements-color-data-diverging-purple-green-9: var(
  --elements-color-core-data-green-800
);
```

## Component-Specific Colors

These tokens are designed for specific UI components. Use these when building or styling the corresponding components.

### Button

```
--elements-color-components-button-bg-secondary: var(
  --elements-color-core-brand-darkest_alpha
);
--elements-color-components-button-bg-secondary-inverse: var(
  --elements-color-core-brand-lightest_alpha
);
--elements-color-components-button-bg-tertiary: var(
  --elements-color-core-brand-darkest_alpha
);
--elements-color-components-button-bg-tertiary-inverse: var(
  --elements-color-core-brand-lightest_alpha
);
```

### Chips

```
--elements-color-components-chips-bg-brand: var(
  --elements-color-semantic-background-brand
);
--elements-color-components-chips-bg-brand-hover: var(
  --elements-color-core-brand-dark
);
--elements-color-components-chips-bg-brand-subtle: var(
  --elements-color-semantic-background-brand-subtle
);
--elements-color-components-chips-border-brand-subtle: var(
  --elements-color-core-brand-base
);
--elements-color-components-chips-border-brand-subtle-hover: var(
  --elements-color-core-brand-dark
);
--elements-color-components-chips-text-brand: var(
  --elements-color-core-brand-lightest
);
--elements-color-components-chips-text-brand-subtle: var(
  --elements-color-core-brand-base
);
--elements-color-components-chips-text-brand-subtle-hover: var(
  --elements-color-core-brand-dark
);
```

### Dialogs

```
--elements-color-components-dialogs-bg-default: var(
  --elements-color-semantic-background-default
);
```

### Divider

```
--elements-color-components-divider-bg-default: var(
  --elements-color-core-neutral-200
);
--elements-color-components-divider-bg-subtle: var(
  --elements-color-core-neutral-100
);
--elements-color-components-divider-bg-highlight: var(
  --elements-color-core-brand-darkest
);
--elements-color-components-divider-bg-inverse: var(
  --elements-color-core-neutral-white
);
```

### Tooltip

```
--elements-color-components-tooltip-bg-default: var(
  --elements-color-core-neutral-black
);
--elements-color-components-tooltip-bg-inverse: var(
  --elements-color-core-neutral-white
);
--elements-color-components-tooltip-text-default: var(
  --elements-color-semantic-text-default_inverse
);
--elements-color-components-tooltip-text-inverse: var(
  --elements-color-semantic-text-default
);
```

### ISI Tray

```
--elements-color-components-isi_tray-header-title: var(
  --elements-color-semantic-text-accent-default
);
```

## Dark Mode

Dark mode is activated via the ThemeProvider mode prop, which accepts three values: "light" (default), "dark", or "auto" (follows the user's system preference via prefers-color-scheme).

When dark mode is active, primitive tokens remain unchanged — the same brand, neutral, and alerting palettes are available.
What changes are the semantic tokens: they are remapped to point to different primitive values, ensuring proper contrast and readability on dark backgrounds.

> Best practice: Always use semantic tokens (--elements-color-semantic-*) rather than primitive tokens when styling components. This ensures your UI adapts automatically to dark mode without any additional work.

### Accent

```
/* Light → Dark */
--elements-color-semantic-accent-default: var(--elements-color-core-brand-light);
--elements-color-semantic-accent-hover: var(--elements-color-core-brand-lighter);
--elements-color-semantic-accent-active: var(--elements-color-core-brand-lightest);
--elements-color-semantic-accent-focus: var(--elements-color-core-brand-lighter);
--elements-color-semantic-accent-disabled: var(--elements-color-core-neutral-700);
--elements-color-semantic-accent-inverse: var(--elements-color-core-neutral-black);
--elements-color-semantic-accent-inverse_hover: var(
  --elements-color-core-brand-darkest
);

/* Neutral Accent */
--elements-color-semantic-accent-neutral_default: var(
  --elements-color-core-neutral-50
);
--elements-color-semantic-accent-neutral_hover: var(
  --elements-color-core-neutral-100
);
--elements-color-semantic-accent-neutral_active: var(
  --elements-color-core-neutral-200
);

/* Status Accent */
--elements-color-semantic-accent-error_default: var(
  --elements-color-core-red-lighter
);
--elements-color-semantic-accent-error_hover: var(
  --elements-color-core-red-light
);
--elements-color-semantic-accent-success_default: var(
  --elements-color-core-green-lighter
);
--elements-color-semantic-accent-success_hover: var(
  --elements-color-core-green-light
);
--elements-color-semantic-accent-alert_default: var(
  --elements-color-core-orange-lighter
);
--elements-color-semantic-accent-alert_hover: var(
  --elements-color-core-orange-light
);
--elements-color-semantic-accent-info_default: var(
  --elements-color-core-blue-lighter
);
--elements-color-semantic-accent-info_hover: var(
  --elements-color-core-blue-light
);
```

### Destruct

```
/* Light → Dark */
--elements-color-semantic-destruct-default: var(--elements-color-core-red-light);
--elements-color-semantic-destruct-hover: var(--elements-color-core-red-lighter);
--elements-color-semantic-destruct-active: var(
  --elements-color-core-red-lightest
);
--elements-color-semantic-destruct-default_inverse: var(
  --elements-color-core-red-base
);
--elements-color-semantic-destruct-hover_inverse: var(
  --elements-color-core-red-dark
);
--elements-color-semantic-destruct-active_inverse: var(
  --elements-color-core-red-darkest
);
```

### Backgrounds

```
/* Light → Dark */
--elements-color-semantic-background-default: var(
  --elements-color-core-neutral-900
);
--elements-color-semantic-background-subtle: var(
  --elements-color-core-neutral-950
);

/* Brand */
--elements-color-semantic-background-brand: var(
  --elements-color-core-brand-light
);
--elements-color-semantic-background-brand-subtle: var(
  --elements-color-core-brand-darkest
);

/* Neutral */
--elements-color-semantic-background-neutral: var(
  --elements-color-core-neutral-50
);
--elements-color-semantic-background-neutral-subtle: var(
  --elements-color-core-neutral-800
);

/* Status */
--elements-color-semantic-background-error: var(--elements-color-core-red-light);
--elements-color-semantic-background-error-subtle: var(
  --elements-color-core-red-darkest
);
--elements-color-semantic-background-success: var(
  --elements-color-core-green-light
);
--elements-color-semantic-background-success-subtle: var(
  --elements-color-core-green-darkest
);
--elements-color-semantic-background-alert: var(
  --elements-color-core-orange-light
);
--elements-color-semantic-background-alert-subtle: var(
  --elements-color-core-orange-darkest
);
--elements-color-semantic-background-info: var(--elements-color-core-blue-light);
--elements-color-semantic-background-info-subtle: var(
  --elements-color-core-blue-darkest
);
```

### Borders

```
/* Light → Dark */
--elements-color-semantic-border-default: var(--elements-color-core-neutral-300);
--elements-color-semantic-border-subtle: var(--elements-color-core-neutral-700);
--elements-color-semantic-border-highlight: var(
  --elements-color-core-brand-lighter
);
--elements-color-semantic-border-error: var(--elements-color-core-red-light);
--elements-color-semantic-border-success: var(--elements-color-core-green-light);
--elements-color-semantic-border-warning: var(
  --elements-color-core-orange-light
);
--elements-color-semantic-border-info: var(--elements-color-core-blue-light);
```

### Text and Icons

```
/* Default */
--elements-color-semantic-text-default: var(--elements-color-core-neutral-50);
--elements-color-semantic-text-default_inverse: var(
  --elements-color-core-neutral-black
);

/* Subtle */
--elements-color-semantic-text-subtle: var(--elements-color-core-neutral-200);
--elements-color-semantic-text-subtle_inverse: var(
  --elements-color-core-neutral-600
);

/* Strong */
--elements-color-semantic-text-strong: var(--elements-color-core-neutral-white);

/* Disabled */
--elements-color-semantic-text-disabled: var(--elements-color-core-neutral-600);
--elements-color-semantic-text-disabled_inverse: var(
  --elements-color-core-neutral-300
);

/* Helper */
--elements-color-semantic-text-helper: var(--elements-color-core-neutral-200);
--elements-color-semantic-text-helper_inverse: var(
  --elements-color-core-neutral-600
);

/* Highlight */
--elements-color-semantic-text-highlight: var(
  --elements-color-core-brand-lighter
);
--elements-color-semantic-text-highlight_inverse: var(
  --elements-color-core-brand-darkest
);

/* Accent Text */
--elements-color-semantic-text-accent-default: var(
  --elements-color-core-brand-lighter
);
--elements-color-semantic-text-accent-hover: var(
  --elements-color-core-brand-lightest
);
--elements-color-semantic-text-accent-active: var(
  --elements-color-core-brand-lightest
);

/* Error Text */
--elements-color-semantic-text-error: var(--elements-color-core-red-lighter);
--elements-color-semantic-text-error_inverse: var(
  --elements-color-core-red-dark
);
--elements-color-semantic-text-error-strong: var(
  --elements-color-core-red-lightest
);
--elements-color-semantic-text-error-subtle: var(
  --elements-color-core-red-darkest
);

/* Success Text */
--elements-color-semantic-text-success: var(--elements-color-core-green-lighter);
--elements-color-semantic-text-success_inverse: var(
  --elements-color-core-green-dark
);
--elements-color-semantic-text-success-strong: var(
  --elements-color-core-green-lightest
);
--elements-color-semantic-text-success-subtle: var(
  --elements-color-core-green-darkest
);

/* Alert Text */
--elements-color-semantic-text-alert: var(--elements-color-core-orange-lighter);
--elements-color-semantic-text-alert_inverse: var(
  --elements-color-core-orange-dark
);
--elements-color-semantic-text-alert-strong: var(
  --elements-color-core-orange-lightest
);
--elements-color-semantic-text-alert-subtle: var(
  --elements-color-core-orange-darkest
);

/* Info Text */
--elements-color-semantic-text-info: var(--elements-color-core-blue-lighter);
--elements-color-semantic-text-info_inverse: var(
  --elements-color-core-blue-dark
);
--elements-color-semantic-text-info-strong: var(
  --elements-color-core-blue-lightest
);
--elements-color-semantic-text-info-subtle: var(
  --elements-color-core-blue-darkest
);
```

### Component-Specific Dark Mode Overrides

In dark mode, component-specific tokens are also automatically remapped. Key overrides include:

- Button — Secondary and tertiary background tokens swap between lightest_alpha and darkest_alpha variants
- Chips — Brand chip backgrounds shift to lighter brand tones; text tokens invert for contrast
- Tags — All tag color variants (blue, green, red, orange, purple, teal, etc.) swap to use 200-level tones for text/solid backgrounds and 950-level tones for subtle backgrounds
- Tooltip — Background and text colors are inverted (black ↔ white)
- Divider — Default shifts from neutral-200 to neutral-600; highlight shifts from brand-darkest to brand-lightest
- Dialogs — Background shifts from neutral-white to neutral-800

# Foundations / Data Visualization

Source: https://elements.sanofidesign.com/557b0250b/p/324439-data-visualization/b/47abf8

Capture status: pending authenticated capture.

The unauthenticated local capture currently resolves to a Zeroheight shell that requires password or SSO. This file therefore records only locally verifiable Data Visualization guidance from executable tokens, local chart contracts, and Storybook source indexes. Do not invent additional Data Visualization rules until the authenticated page text is captured.

Local evidence:

- `outputs/reports/web-research/sanofi-data-visualization/data-visualization.zeroheight.html`
- `outputs/reports/web-research/sanofi-data-visualization/storybook-index.json`
- `outputs/reports/web-research/sanofi-data-visualization/storybook-stories.json`
- `design-system/tokens/tokens.css`
- `design-system/contracts/page-modules/business-chart.contract.json`
- `design-system/contracts/page-modules/data-visualization.contract.json`
- `design-system/rules/data-visualization-usage.json`

## Available Data Color Token Families

Categorical tokens are available for unrelated named series:

```css
--elements-color-data-categorical-1
--elements-color-data-categorical-2
--elements-color-data-categorical-3
--elements-color-data-categorical-4
--elements-color-data-categorical-5
--elements-color-data-categorical-6
--elements-color-data-categorical-7
--elements-color-data-categorical-8
--elements-color-data-categorical-9
--elements-color-data-categorical-10
--elements-color-data-categorical-11
--elements-color-data-categorical-12
```

Sequential tokens are available for ordered magnitude:

```css
--elements-color-data-sequential-blue-1
--elements-color-data-sequential-blue-2
--elements-color-data-sequential-blue-3
--elements-color-data-sequential-blue-4
--elements-color-data-sequential-blue-5
--elements-color-data-sequential-purple-1
--elements-color-data-sequential-purple-2
--elements-color-data-sequential-purple-3
--elements-color-data-sequential-purple-4
--elements-color-data-sequential-purple-5
--elements-color-data-sequential-neutral-1
--elements-color-data-sequential-neutral-2
--elements-color-data-sequential-neutral-3
--elements-color-data-sequential-neutral-4
--elements-color-data-sequential-neutral-5
```

Diverging tokens are available for two-sided comparison around a midpoint:

```css
--elements-color-data-diverging-blue-orange-1
--elements-color-data-diverging-blue-orange-5
--elements-color-data-diverging-blue-orange-9
--elements-color-data-diverging-purple-green-1
--elements-color-data-diverging-purple-green-5
--elements-color-data-diverging-purple-green-9
--elements-color-data-diverging-green-red-1
--elements-color-data-diverging-green-red-5
--elements-color-data-diverging-green-red-9
```

## Local Rules

- Use data visualization tokens for chart series, not raw colors.
- Use categorical tokens only for separate named categories.
- Use sequential tokens for intensity or ordered magnitude.
- Use diverging tokens only when a chart has an explicit midpoint or baseline.
- Green is not the default primary chart color. It is allowed only for explicit success/status meaning or a labeled data series.
- Business charts must expose title, filter context, last updated time, data source, empty/error state reservation, and exact-value access.
- Unsupported chart types must be explicit fallback modules with `data-fallback-module="chart"` and `data-fallback-reason`.

## Pending Capture Boundary

The authenticated Zeroheight Data Visualization page must be captured before adding official guidance about chart-specific anatomy, chart-type recommendations, or detailed visual examples beyond the local contract.

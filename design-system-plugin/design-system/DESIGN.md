# Sanofi Elements DESIGN.md

## Purpose

This file is the AI-readable design system interface for generating Sanofi Elements HTML.

Use it together with:

- `design-system/tokens/tokens.css` for executable CSS variables.
- `design-system/registry/registry.json` for discoverable local design-system items.
- `design-system/contracts/components/component-contract-index.json` for component contracts.
- `design-system/atomic/component-coverage-matrix.json` for component package coverage.
- `design-system/patterns/pattern-index.json` and `design-system/templates/template-index.json` for page composition.
- `design-system/rules/rules-index.json` for validation expectations.

The role of this file is to tell AI what the design system means. The role of `tokens.css` is to make the resulting HTML executable. The role of validators is to prove the output did not drift from the local design-system contract.

## Source Contract

The design-system contract is local-first. `DESIGN.md` defines semantics and dependency boundaries; workflow steps live in `skills/design-prototype-generator/SKILL.md` and `.cursor/rules/sanofi-design-system.mdc`.

Authoritative local sources:

- `components.json` defines aliases and command entrypoints.
- `design-system/registry/registry.json` and `design-system/registry/items/*.json` define discoverable local items.
- `design-system/contracts/components/component-contract-index.json` defines component contracts.
- `design-system/atomic/component-coverage-matrix.json` defines component package coverage.
- `design-system/business/business-standards-index.json` defines business page standard coverage.
- `design-system/rules/rules-index.json` defines executable rules.
- `design-system/templates/template-index.json` and `design-system/patterns/pattern-index.json` define page composition inputs.
- `design-system/tokens/tokens.css` is the executable CSS dependency.

Remote Storybook, Zeroheight, and public websites are refresh sources only. Normal generation should consume local Markdown, contracts, tokens, registry items, rules, and validators.

## Foundations

### Color

Source: `knowledge/docs/foundations-colors--docs.md`.

Sanofi Elements color is built on brand primitives and semantic aliases.

Rules:

- Use semantic, component, or data visualization color tokens in generated HTML.
- Do not directly use core primitive color tokens in product HTML unless a local rule explicitly allows it.
- Do not hard-code hex, RGB, HSL, OKLCH, or named colors.
- Sanofi brand accent is the purple brand family.
- Green is reserved for success/status or explicitly labeled data series. It is not the default brand, navigation, progress, chart, or primary action color.

Common token roles:

```css
--elements-color-semantic-accent-default
--elements-color-semantic-accent-hover
--elements-color-semantic-accent-active
--elements-color-semantic-background-brand
--elements-color-semantic-background-brand-subtle
--elements-color-semantic-border-default
--elements-color-semantic-text-default_inverse
--elements-color-semantic-text-subtle_inverse
--elements-color-semantic-text-accent-default
```

### Typography

Source: `knowledge/docs/foundations-typography--docs.md`.

Use Sanofi typography tokens and font families.

Rules:

- Latin text should use `Sanofi Sans`.
- CJK fallback should use `Noto Sans SC`.
- Do not use Arial or generic Storybook UI fonts in product HTML.
- Use tokenized font sizes, weights, line heights, and letter spacing.
- Default generated business/admin pages must use `--elements-core-font-letterspacing-default`; tight or negative letter spacing is not a default.
- Keep admin page text compact and scannable; reserve large display sizes for true page titles or marketing contexts.
- Default page titles use `--elements-font-size-700` with `--elements-font-lineheight-4`; page descriptions use `--elements-font-size-300` with `--elements-font-lineheight-3`.

Core tokens:

```css
--elements-font-family-sans: Sanofi Sans;
--elements-font-family-serif: Sanofi Serif;
--elements-font-size-100: 0.75rem;
--elements-font-size-200: 0.875rem;
--elements-font-size-300: 1rem;
--elements-font-size-400: 1.125rem;
--elements-font-size-500: 1.25rem;
--elements-font-size-600: 1.5rem;
--elements-font-size-700: 1.75rem;
--elements-font-size-800: 2rem;
--elements-font-weight-regular: 400;
--elements-font-weight-bold: 700;
```

### Layout

Source: `knowledge/docs/foundations-layout--docs.md`.

Use Container and Grid contracts for page layout.

For business/admin generated pages, title regions must use the PageHeader primitive contract from `knowledge/docs/components-pageheader--docs.md`. Page title and description are stacked; actions, badges, or status chips sit in a separate action area.

Breakpoints:

```css
--elements-breakpoint-xs-max: 414px;
--elements-breakpoint-sm-min: 415px;
--elements-breakpoint-sm-max: 767px;
--elements-breakpoint-md-min: 768px;
--elements-breakpoint-md-max: 1279px;
--elements-breakpoint-lg-min: 1280px;
--elements-breakpoint-xl-min: 1440px;
--elements-breakpoint-2xl-min: 1920px;
```

Container widths:

```css
--elements-container-width-sm: 414px;
--elements-container-width-md: 704px;
--elements-container-width-lg: 1184px;
--elements-container-width-xl: 1184px;
--elements-container-width-2xl: 1664px;
```

Spacing:

```css
--elements-spacing-none: 0rem;
--elements-spacing-3xs: 0.125rem;
--elements-spacing-2xs: 0.25rem;
--elements-spacing-sm: 0.75rem;
--elements-spacing-md: 1rem;
--elements-spacing-lg: 1.25rem;
--elements-spacing-xl: 1.5rem;
--elements-spacing-2xl: 2rem;
--elements-spacing-3xl: 2.5rem;
--elements-spacing-4xl: 3rem;
```

Admin pages should use tighter density than marketing pages. A page profile must define whether the page is `compact`, `default`, or `spacious`.

### Radius

Source: `knowledge/docs/foundations-radius--docs.md`.

Use radius tokens only.

```css
--elements-radius-none: 0px;
--elements-radius-sm: 4px;
--elements-radius-md: 8px;
--elements-radius-lg: 12px;
--elements-radius-xl: 16px;
--elements-radius-rounded: 9999px;
```

Admin UI should default to `--elements-radius-sm` or `--elements-radius-md`. Do not use oversized rounded cards for operational pages.

### Elevation

Source: `knowledge/docs/foundations-elevation--docs.md`.

Use elevation tokens instead of raw box-shadow values.

```css
--elements-core-elevation-01
--elements-core-elevation-02
--elements-core-elevation-03
--elements-core-elevation-04
--elements-core-elevation-05
```

Recommended roles:

- `01`: subtle cards and dividers.
- `02`: menus, dropdowns, sticky headers.
- `03`: floating action surfaces and sticky bars.
- `04`: modals and dialogs.
- `05`: toasts and top-layer notifications.

Executable rule: `rules/elevation-usage.json`.

Generated layered surfaces must expose both markers:

```html
data-elevation-role="header"
data-elevation-token="--elements-core-elevation-02"
```

Default generated admin/business mappings:

- Navigation headers, menus, dropdowns, and calendar popovers: `--elements-core-elevation-02`.
- Sticky save bars and floating action surfaces: `--elements-core-elevation-03`.
- Modals, dialogs, and drawers: `--elements-core-elevation-04`.
- Toasts and top-layer notifications: `--elements-core-elevation-05`.

Run `scripts/validate-elevation-usage <html-file>` for generated HTML that contains layered surfaces. Raw `box-shadow` values are invalid in generated outputs.

### Motion

Source: `knowledge/docs/foundations-motion--docs.md`, local tokens in `tokens.css`, and `token-allowlist.txt`.

The Zeroheight Motion page URL could not be extracted through the unauthenticated local capture path. The local Motion foundation therefore records token-only guidance from executable tokens. Do not invent Motion guidance beyond the locally available tokens until the authenticated foundation page is captured.

Available motion duration tokens:

```css
--elements-motion-duration-75: 75ms;
--elements-motion-duration-150: .15s;
--elements-motion-duration-300: .3s;
--elements-motion-duration-500: .5s;
--elements-motion-duration-750: .75s;
--elements-motion-duration-1000: 1s;
--elements-motion-duration-1500: 1.5s;
--elements-motion-duration-2500: 2.5s;
```

Available easing tokens:

```css
--elements-motion-ease-linear: linear;
--elements-motion-ease-in: cubic-bezier(1, 0, .8, 1);
--elements-motion-ease-out: cubic-bezier(.2, 0, 0, 1);
--elements-motion-ease-in-out: cubic-bezier(.8, 0, .2, 1);
--elements-motion-ease-in-bounce: cubic-bezier(.6, -.28, .73, .04);
--elements-motion-ease-out-bounce: cubic-bezier(.17, .89, .32, 1.27);
--elements-motion-ease-in-out-bounce: cubic-bezier(.68, -.55, .27, 1.55);
```

Rules:

- Use motion tokens for transitions and animations.
- Do not hard-code transition durations or cubic-bezier values.
- Use `75ms` or `150ms` for direct control feedback.
- Use `300ms` or `500ms` for menu, drawer, modal, and section entrance motion.
- Use `750ms+` only for large illustrative movement or non-operational hero experiences.
- Business admin pages should prefer short, functional motion.

### Brand Assets

Source: `https://elements.sanofidesign.com/557b0250b/p/396515-brand-assets`.

The Sanofi logo is a fixed brand asset, not generated typography.

Local asset package:

```text
assets/brand/brand-assets.contract.json
assets/brand/sanofi-logo-full.svg
```

The local `sanofi-logo-full.svg` is copied from `https://cdn.prod.accelerator.sanofi/elements/icons/sanofi-logo.svg` and has intrinsic size `94x24`.

Rules:

- Use `assets/brand/sanofi-logo-full.svg` for the top-left Sanofi brand lockup in admin HTML.
- Mark visible logo usage with `data-brand-asset-id="sanofi-logo-full"`.
- Do not recreate the Sanofi logo with text, CSS dots, manually drawn vectors, or `.brand-word` markup.
- If the authenticated Brand Assets package is refreshed, replace the fixed asset file through the brand asset contract instead of changing page renderer HTML.

## Components

The local system currently accounts for 95 component contracts and 425 Storybook stories. The component coverage matrix records 93 completed components and 2 unsupported components.

Use component packages and story atoms when available. Do not infer unregistered component behavior.

Core components for business/admin HTML:

| Need | Components |
| --- | --- |
| App shell | `navigation-header`, `sidebar`, `menu`, `icon` |
| Layout | `container`, `grid`, `flex` |
| Forms and filters | `text-input`, `search-input`, `select`, `autocomplete`, `checkbox`, `radio`, `switch`, `slider`, `date-picker` |
| Actions | `button`, `button-icon`, `link` |
| Lists and status | `tag`, `chip-status`, `chip-filter`, `chip-select`, `content-block`, `card` |
| Feedback | `toast`, `banner`, `modal`, `drawer`, `loading-spinner`, `progress-bar`, `progress-stepper-progress-stepper-nav` |
| Navigation | `breadcrumb`, `tabs`, `pagination`, `tree-view`, `cascading-menu`, `mega-menu` |
| Media and content | `image`, `video-thumbnail`, `hero`, `carousel`, `footer` |

Button is the current complete standard package example:

- Docs contract: `atomic/components/button/docs/button.docs.contract.json`
- Package: `atomic/components/button/button.package.json`
- Output: `outputs/html/button-complete.atomic.html`
- Registry item: `registry/items/sanofi-button-complete-package.json`

For Button requests, resolve through the complete package first, then select the exact story atom.

Default component size rule:

- Generated business/admin HTML must use ordinary `medium` size by default.
- Do not default Select, DatePicker, Button, SearchInput, Tabs, Menu, Sidebar, or form controls to `large`.
- `large` is allowed only when a component spec explicitly declares an override for a specific use case.
- When API reference defaults conflict with Storybook story args or usage snippets, the API reference default wins for generated business/admin pages. Current known conflicts: Select and DatePicker default stories show `InputSize.LARGE`, while their API tables declare `medium`; generated defaults must stay `medium`.
- The executable policy lives at `rules/component-size-policy.json`; generated runtime components should expose medium size metadata such as `data-select-size="medium"`, `data-date-picker-size="medium"`, `data-button-size="medium"`, or `data-search-size="medium"` when the component supports size metadata.

Icon usage contract:

- Generated business/admin HTML must load `rules/icon-usage.json` and expose `data-icon-rule="icon-usage"` at page level.
- Functional icons must resolve through `icon` or `button-icon` provenance. Do not use bare text glyphs such as `+`, `-`, arrows, box symbols, or checkmarks as functional icons.
- Navigation icons, sidebar chevrons, sidebar collapse controls, search/form-control icons, tree expand/collapse controls, and link affordance icons must carry `data-primitive="icon"`, `data-source-component="icon"`, `data-story-id="components-icon--gallery"`, `data-source-doc-id="components-icon--docs"`, `data-icon-name`, `data-icon-role`, and `data-icon-size`.
- Interactive icon-only controls must put the accessible label on the button or anchor and hide the child Icon with `aria-hidden="true"`.
- Business/admin compact pages may use role-based icon sizes: navigation/form/link icons use `1.25rem`; tree toggle buttons reserve `1.25rem`; the inner tree glyph uses `0.875rem`. These are explicit role sizes, not arbitrary local scaling.
- Executable rule: `rules/icon-usage.json`.

### Component Runtime Rule

The first backend component runtime scope is:

```text
select, date-picker, button, search-input, tabs, menu, sidebar, container, grid, card, tag, progress-bar, icon
```

For these components, page renderers must not hand-write the component DOM when a runtime-backed delivery is required. The renderer should emit a component spec with:

```text
component_id, story_id, props, children_or_slots, interaction_requirements, provenance
```

The component runtime then renders the actual Sanofi Elements React component from `@sanofi-accelerator/elements` and includes the required JS/CSS bundle for hydration.

When private package access is unavailable, the local implementation may use complete atomic component packages as a runtime source. It must mark output with:

```text
data-component-runtime="sanofi-local-atomic-components"
data-render-source="local-atomic-component-package"
```

This local mode is a real component-runtime path backed by local atomic package/story contracts. It must not be described as official `@sanofi-accelerator/elements` output.

Required runtime proof:

```text
data-component-runtime="sanofi-elements-react"
data-render-source="@sanofi-accelerator/elements"
data-component-instance
data-component-id
data-story-id
```

Story IDs, source doc IDs, and `data-primitive` markers are audit provenance only. They do not prove that a real component was used.

Generated HTML must expose one of three output states for each component or page module:

| State | Required markers | Meaning |
| --- | --- | --- |
| `official-runtime` | `data-component-runtime="sanofi-elements-react"` and `data-render-source="@sanofi-accelerator/elements"` | Official Sanofi Elements React runtime output. |
| `local-atomic-runtime` | `data-component-runtime="sanofi-local-atomic-components"` and `data-render-source="local-atomic-component-package"` | Local atomic package/story-contract runtime output used when private package access is unavailable. |
| `explicit-fallback` | `data-fallback-module` and `data-fallback-reason` | A declared fallback module that must not be presented as official component runtime. |

Page-level output state must also be explicit on `<body>`:

```html
data-output-state-official-runtime="absent|present"
data-output-state-local-atomic-runtime="absent|present"
data-output-state-explicit-fallback="absent|present"
```

Select-specific rule:

- `native:false` Select must render as component-owned combobox/listbox behavior.
- A hidden native select may exist only as semantic fallback when declared by the component contract.
- A visible `select[data-primitive="select"]` is forbidden for `admin-dashboard` and other runtime-backed admin pages.

DatePicker-specific rule:

- DatePicker defaults to `medium` even when Storybook examples use `InputSize.LARGE`.
- Runtime-backed DatePicker must expose a combobox trigger and component-owned dialog region.
- A text input with only `data-primitive="date-picker"` is not enough proof of DatePicker usage.

Runtime package and contract:

```text
component-runtime/package.json
component-runtime/component-runtime.contract.json
component-runtime/specs/admin-dashboard.component-spec.json
```

If `@sanofi-accelerator/elements` cannot be installed or resolved, stop and report the package-access blocker. Do not replace the component with hand-authored DOM.

## Page Patterns

Page generation must resolve to a page pattern and template before rendering HTML.

Current business/admin page example:

- Registry item: `sanofi-admin-query-panel`
- Pattern: `admin-query-panel`
- Template: `onecommercial-admin-query-panel`
- Output: `outputs/html/admin-query-panel.resolved.html`

Business page standards are executable inputs, not narrative guidance:

```text
business/business-standards-index.json
business/page-taxonomy.json
business/task-flow-standard.json
business/data-model-standard.json
business/content-standard.json
business/interaction-state-standard.json
contracts/page-modules/business-table.contract.json
contracts/page-modules/business-chart.contract.json
contracts/page-modules/business-form.contract.json
reference-fit/business-page-family.rules.json
reference-fit/admin-dashboard-chart.rules.json
```

Supported business page profiles:

| Profile | Primary task |
| --- | --- |
| `admin-data-entry-table` | query-and-fill |
| `approval-workflow` | review-and-decide |
| `entity-detail` | read-and-audit |
| `entity-form` | create-or-edit |
| `import-result` | import-and-reconcile |
| `report-dashboard` | monitor-and-compare |
| `information-aggregation` | aggregate-and-investigate |
| `customer-detail-date-query` | query-customer-detail-by-date |
| `permission-admin` | assign-and-review-access |
| `exception-state` | recover-or-explain |

Before rendering a business page, resolve:

1. Page family from `business/page-taxonomy.json`.
2. Workflow states from `business/task-flow-standard.json`.
3. Field and column metadata from `business/data-model-standard.json`.
4. Copy and interaction states from `business/content-standard.json` and `business/interaction-state-standard.json`.
5. Table, chart, and form behavior from the relevant page-module contract.
6. Density and screenshot gates from `rules/density-standards.json` and the applicable reference-fit file.

Admin pages should prioritize:

1. Familiar operational structure.
2. Compact density.
3. List/table readability.
4. Clear filter/action/table hierarchy.
5. Stable sticky regions that do not obscure core data.
6. Sanofi token compliance.
7. Provenance markers for audit output.

## Data Table and List Rule

No official Table/DataTable/DataGrid primitive is registered locally yet. Table-like outputs must use explicit fallback behavior through `contracts/page-modules/business-table.contract.json`.

Rules for business HTML:

- Mark table areas with a fallback reason.
- Do not claim `data-primitive="table"` until a registered primitive exists.
- Keep core columns visible at 1280px desktop width.
- Numeric, status, and action columns are high-priority columns.
- Use compact row height for operational admin pages.
- Keep pagination visually tied to the table.
- Sticky save bars must not hide the final data row or pagination.

Current fallback contract:

```text
contracts/page-modules/business-table.contract.json
contracts/page-modules/data-table-fallback.contract.json
```

Admin query/list pages must also consume:

```text
page-profiles/admin-data-entry-table.profile.json
rules/admin-density.json
reference-fit/admin-data-entry-table.rules.json
```

## Chart and Form Rules

Business chart outputs must consume:

```text
contracts/page-modules/business-chart.contract.json
rules/chart-usage.json
reference-fit/admin-dashboard-chart.rules.json
```

The researched BarChart path may be used for report/dashboard pages when the output declares chart data, axis, size, accessibility labels, and exact-value access. Other chart types remain fallback-only until their official docs and local contract exist.

Business form outputs must consume:

```text
contracts/page-modules/business-form.contract.json
rules/form-usage.json
```

Complex forms must cover validation, error summary, linked controls, async search states, readonly/disabled/permission-denied states, and dirty-form protection.

## Default Business Admin Values

When the user asks for a business/admin page and does not explicitly request a visual override, generated pages must consume:

```text
rules/business-admin-defaults.json
rules/component-size-policy.json
rules/layout-grid-container.json
rules/business-layout-typography.json
rules/business-app-shell-scroll.json
rules/admin-template-navigation.json
```

Default behavior is page-family-specific, not one global layout:

- `entity-form` defaults to a 12-column grid with three desktop fields per row.
- `entity-detail` defaults to a 12-column grid with four readonly fields per row.
- `information-aggregation` defaults to a single content-scroll page with query filters, dashboard summary, chart context, record list, and pagination in one page family.
- `customer-detail-date-query` defaults to a single content-scroll page with date-range query controls, customer summary, customer detail table fallback, result actions, and pagination in one page family.
- `admin-data-entry-table` may use compact density because first-viewport table readability is the page-specific default.
- Left navigation defaults to icon plus label. Text-only navigation is allowed only when the user explicitly asks for it.
- Select defaults to `medium` size and must reserve trailing space for its indicator so the text does not stick to the edge.
- DatePicker defaults to `medium` size, normal shell, edge-safe trailing icon spacing, `single` mode for single date fields, and explicit `range` mode only for date-range fields.
- API default values override Storybook example args for generated defaults. Story examples are useful coverage fixtures, not default-value authority.
- Page titles and descriptions default to PageHeader anatomy, default letter spacing, and tokenized title/subtitle size and line-height.
- Container and Grid anatomy must exist in generated HTML: `contentContainer`, `Grid.Root`, and `Grid.Item` equivalents are required.
- App shell scrolling defaults to content-only: body and shell fill the viewport and hide overflow; the main content region owns vertical scrolling so the topbar and navigation stay fixed.

Generated pages should mark default behavior with:

```text
data-default-rule="business-admin-defaults"
data-default-overrides="none"
data-nav-default="with-icons"
data-grid-mode="normal-12"
data-select-edge-safe="true"
data-date-picker-size="medium"
data-date-picker-edge-safe="true"
data-page-layout-typography="business-layout-typography"
data-primitive="page-header"
data-app-shell-scroll="content-only"
data-scroll-rule="business-app-shell-scroll"
```

## Output Modes

Use two output modes:

### Developer HTML

For engineering handoff:

- Clean static HTML.
- Tokenized CSS.
- Minimal audit noise.
- Semantic landmarks and accessible labels.
- No raw color, raw spacing, or unsupported component claims.

### Audit HTML / Report

For design-system verification:

- `data-primitive`
- `data-pattern`
- `data-story-id`
- `data-source-doc-id`
- `data-token-source`
- fallback reasons
- validator reports

## Executable Contract Index

This section is an index of design-system contracts, not an Agent workflow. Cursor and plugin execution order live in `.cursor/rules/sanofi-design-system.mdc` and `skills/design-prototype-generator/SKILL.md`.

Core executable rules:

- `rules/token-usage.json`
- `rules/primitive-usage.json`
- `rules/component-size-policy.json`
- `rules/default-value-arbitration.json`
- `rules/elevation-usage.json`
- `rules/business-layout-typography.json`
- `rules/business-app-shell-scroll.json`
- `rules/icon-usage.json`
- `rules/business-admin-defaults.json`
- `rules/admin-density.json`
- `rules/admin-delivery-contract.json`
- `reference-fit/admin-data-entry-table.rules.json`
- `reference-fit/business-page-family.rules.json`

Business and module contracts:

- `business/business-standards-index.json`
- `business/task-flow-standard.json`
- `business/data-model-standard.json`
- `business/content-standard.json`
- `business/interaction-state-standard.json`
- `contracts/page-modules/data-table-fallback.contract.json`
- `contracts/page-modules/select-filter.contract.json`
- `contracts/page-modules/business-table.contract.json`
- `contracts/page-modules/business-chart.contract.json`
- `contracts/page-modules/business-form.contract.json`
- `page-profiles/admin-data-entry-table.profile.json`

## Validator Index

Validators prove conformance to the local contract. Delivery workflow and required command combinations belong to Cursor/Skill; this index only lists the executable gates.

```text
scripts/validate-design-md
scripts/validate-business-standards
scripts/sanofi-ds business standards
scripts/validate-token-usage <html-file>
scripts/validate-elevation-usage <html-file>
scripts/validate-page-layout-typography <html-file>
scripts/validate-app-shell-scroll <html-file>
scripts/validate-icon-usage <html-file>
scripts/validate-primitive-usage <html-file>
scripts/validate-component-runtime <html-file>
scripts/validate-default-value-arbitration
scripts/validate-page-pattern <html-file>
scripts/validate-layout-rule-usage <html-file>
scripts/validate-typography-rule-usage <html-file>
scripts/validate-admin-template-navigation <html-file>
scripts/validate-admin-delivery-contract <html-file>
scripts/validate-admin-query-panel-template <html-file>
scripts/validate-admin-page-profile <html-file>
scripts/validate-reference-fit <html-file>
scripts/validate-pattern-resolver
scripts/validate-information-aggregation-page <html-file>
scripts/sanofi-ds rule validate information-aggregation-page <html-file>
scripts/validate-customer-detail-date-query-page <html-file>
scripts/validate-component-package-dom <component-id>
scripts/validate-component-package-html-batch
scripts/validate-provenance <html-file>
```

`scripts/validate-design-md` confirms every token cited in this file exists in `tokens.css` or the token allowlist, every required component cited exists in the component contract index or coverage matrix, and every foundation source has a local docs file or an explicit pending-capture note.

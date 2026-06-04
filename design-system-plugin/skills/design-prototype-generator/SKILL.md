---
name: design-prototype-generator
description: Use when generating or validating HTML prototypes from the local Sanofi Elements design-system plugin, including token usage, primitive usage, page patterns, and component demo registries.
---

# Design Prototype Generator

Use this skill to generate static HTML prototypes that follow the local Sanofi Elements package in this plugin.

`design-system/DESIGN.md` is a design-system contract source, not the workflow owner. This skill owns generation flow, ordering, and delivery checks for plugin-driven work; Cursor-specific workflow lives in `../.cursor/rules/sanofi-design-system.mdc`.

## Package Map

- Local registry: `components.json`, `design-system/registry/registry.json`, and `design-system/registry/items/*.json`
- AI-readable design-system contract: `design-system/DESIGN.md`
- Atomic story library: `design-system/atomic/atomic-component-index.json` and `design-system/atomic/components/*/stories/*.story.json`
- Atomic component packages: `design-system/atomic/components/*/*.package.json`; Button complete package is `design-system/atomic/components/button/button.package.json`
- Component package standard and coverage: `design-system/atomic/component-package-standard.json` and `design-system/atomic/component-coverage-matrix.json`
- Knowledge base: `design-system/knowledge/source-index.json`, `design-system/knowledge/components.json`, `design-system/knowledge/tokens.json`, `design-system/knowledge/coverage.json`, `design-system/knowledge/docs-index.json`, and docs under `design-system/knowledge/docs/*.md`
- AI-executable contracts: `design-system/contracts/components/component-contract-index.json`, `design-system/contracts/semantic-token-map.json`, `design-system/contracts/resolvers/latest-resolution.json`, and `design-system/contracts/benchmarks/evaluation-benchmark.json`
- Business standards: `design-system/business/business-standards-index.json`, `design-system/business/page-taxonomy.json`, `design-system/business/task-flow-standard.json`, `design-system/business/data-model-standard.json`, `design-system/business/content-standard.json`, and `design-system/business/interaction-state-standard.json`
- Page module contracts: `design-system/contracts/page-modules/select-filter.contract.json`, `design-system/contracts/page-modules/data-table-fallback.contract.json`, `design-system/contracts/page-modules/business-table.contract.json`, `design-system/contracts/page-modules/business-chart.contract.json`, and `design-system/contracts/page-modules/business-form.contract.json`
- Policies: `design-system/policies/fallback-policy.json`, `design-system/policies/naming-standard.json`, `design-system/policies/source-provenance.json`
- Tokens: `design-system/tokens/tokens.css`, `design-system/tokens/token-allowlist.txt`, `design-system/tokens/token-manifest.json`
- Primitives: `design-system/primitives/primitive-index.json`, component folders under `design-system/primitives/components/`
- Patterns: `design-system/patterns/pattern-index.json`
- Page profiles and reference fit rules: `design-system/page-profiles/` and `design-system/reference-fit/`
- Templates: `design-system/templates/template-index.json`
- Rules: `design-system/rules/rules-index.json`
- Business default values: `design-system/rules/business-admin-defaults.json`
- Elevation rule: `design-system/rules/elevation-usage.json`
- Business layout typography rule: `design-system/rules/business-layout-typography.json`
- Business app shell scroll rule: `design-system/rules/business-app-shell-scroll.json`
- Icon usage rule: `design-system/rules/icon-usage.json`
- Information aggregation page rule: `design-system/rules/information-aggregation-page.json`
- Cursor project workflow: `../.cursor/rules/sanofi-design-system.mdc`
- Examples: `design-system/examples/`
- Generated outputs: `outputs/html/` and `outputs/reports/`
- Maintenance toolkit entrypoint: `scripts/sanofi-ds`; prefer this for routine inspect/render/validate/report workflows before falling back to individual low-level scripts.

## Token Source Contract

- Treat Storybook `Foundations / Colors` as the primary local token baseline: `https://elements.prod.accelerator.sanofi/?path=/docs/foundations-colors--docs`.
- Use the local Markdown copy first: `design-system/knowledge/docs/foundations-colors--docs.md`.
- Use the local extraction from Sanofi Elements `v3.48.3`; confirm details in `design-system/tokens/token-manifest.json` before generating visual CSS.
- `design-system/tokens/tokens.css` is the prototype dependency; it is extracted from Storybook CSS, not from Zeroheight component pages.
- Use Zeroheight pages and Storybook component stories for component behavior and demo provenance only.
- If a requested visual value is not covered by `--elements-*` tokens, report the token gap instead of inventing raw colors or pixel values.

## Required Workflow

1. Load `design-system/DESIGN.md` as the contract source, then load `components.json`, `design-system/registry/registry.json`, and `design-system/business/business-standards-index.json`.
2. For routine generation or maintenance, prefer `scripts/sanofi-ds render "<request>" --profile <profile-id> --validate --screenshot`, or use `scripts/sanofi-ds doctor`, `component inspect`, `token diff`, `profile inspect`, `rule list`, and `gap list` before opening raw scripts.
3. Run or emulate `scripts/search-local-registry "<request>"` and select the matching registry item before opening broad docs.
4. Load the selected `design-system/registry/items/<item>.json` and only the source files declared by that item.
   - If the request asks for Button, load `sanofi-button-complete-package` first, then select the exact story atom from `button.package.json`.
   - If the matched item is `registry:story`, load its atomic story JSON and template, then render from the atom. Do not infer another variant from it.
   - If the prompt references a precise Storybook story id, run `scripts/materialize-story-atom <story-id>` first when the atom is missing.
5. Load `design-system/knowledge/source-index.json`; confirm the registry is the lookup layer and Storybook Markdown/contracts remain the primary fact source.
6. Load `design-system/contracts/components/component-contract-index.json` and relevant component contracts before selecting components.
7. Load `design-system/contracts/semantic-token-map.json` before choosing any visual token.
8. For page layouts, load `design-system/rules/layout-grid-container.json`, `design-system/rules/typography-font-stack.json`, and `design-system/rules/admin-template-navigation.json` before composing sections. Admin pages must use `Container` and `Grid` contracts from `components-container--docs` and `components-grid--docs`.
   - For business/admin pages, classify the page family through `design-system/business/page-taxonomy.json`, then load the matched page profile, `design-system/business/task-flow-standard.json`, `design-system/business/data-model-standard.json`, `design-system/business/content-standard.json`, `design-system/business/interaction-state-standard.json`, and the applicable `business-table`, `business-chart`, or `business-form` module contract.
   - If the user did not explicitly request a visual override, load `design-system/rules/business-admin-defaults.json` and apply page-family-specific defaults for navigation, component size, grid, spacing, typography, and select edge-safe behavior.
   - Load `design-system/rules/business-layout-typography.json` for generated business/admin page title regions. Use PageHeader anatomy, default letter spacing, stacked title/description, and Container/Grid parts.
   - Load `design-system/rules/business-app-shell-scroll.json` for generated business/admin page shells. Body and shell must not scroll; the main content region owns vertical scrolling.
   - Load `design-system/rules/icon-usage.json` for generated business/admin page icon defaults. Functional icons must use Icon/ButtonIcon provenance, not text glyphs or naked SVG.
   - Load `design-system/rules/elevation-usage.json` for layered surfaces. Headers use `--elements-core-elevation-02`; sticky action/save bars use `--elements-core-elevation-03`; overlays use `--elements-core-elevation-04`; toasts use `--elements-core-elevation-05`.
   - For information aggregation pages, load `design-system/page-profiles/information-aggregation.profile.json` and `design-system/rules/information-aggregation-page.json`. The page must combine query filters, dashboard summary, chart context, record list, and pagination in one content-scroll region.
   - For admin query/list/data-entry pages, also load `design-system/page-profiles/admin-data-entry-table.profile.json`, `design-system/rules/admin-density.json`, `design-system/reference-fit/admin-data-entry-table.rules.json`, `design-system/contracts/page-modules/select-filter.contract.json`, and `design-system/contracts/page-modules/data-table-fallback.contract.json`.
9. Run or consume `scripts/resolve-pattern "<request>"`; generated HTML must consume the resolver output, not only the raw prompt.
10. Load `design-system/knowledge/docs-index.json` and the relevant `design-system/knowledge/docs/<storybook-id>.md` files only as source evidence behind the contracts.
11. Identify the requested component, page type, and interaction states from the matched registry item, contract index, resolver output, `design-system/knowledge/components.json`, and `design-system/knowledge/coverage.json`.
12. Load the component primitive registry before writing markup.
13. Load the relevant pattern, layout rule, and template before composing a page.
14. Load `design-system/knowledge/tokens.json` and `design-system/tokens/token-manifest.json`; confirm the Storybook v3.48.3 source before styling.
15. Use `design-system/tokens/tokens.css` for visual styling. Product HTML must use `Sanofi Sans` for Latin text and `Noto Sans SC` for CJK fallback; never use Arial or Storybook UI fonts.
16. Do not invent unsupported component behavior. If a component is missing, state the coverage gap and use `design-system/policies/fallback-policy.json`.
17. Write the HTML prototype to `outputs/html/` with `data-primitive`, `data-pattern`, `data-story-id`, `data-source-doc-id`, `data-token-source`, page-level `data-layout-rule`, and page-level `data-typography-rule` markers.
18. Run `scripts/sanofi-ds render "<request>" --profile <profile-id> --validate --screenshot` when a page profile is known. For lower-level troubleshooting, run the validation scripts:
   - `scripts/build-generic-primitives`
   - `scripts/build-component-coverage-matrix`
   - `scripts/build-component-package-factory <component-id>` before claiming a component can be promoted to a complete package
   - `scripts/render-component-package <component-id>`
   - `scripts/build-local-registry`
   - `scripts/validate-local-registry`
   - `scripts/validate-design-md`
   - `scripts/validate-business-standards`
   - `scripts/build-atomic-library`
   - `scripts/validate-atomic-library`
   - `scripts/validate-docs-md`
   - `scripts/validate-component-contracts`
   - `scripts/validate-semantic-token-map`
   - `scripts/validate-pattern-resolver`
   - `scripts/build-knowledge-base`
   - `scripts/validate-source-index`
   - `scripts/transform-tokens`
   - `scripts/validate-token-usage <html-file>`
   - `scripts/validate-elevation-usage <html-file>`
   - `scripts/validate-primitive-usage <html-file>`
   - `scripts/validate-page-pattern <html-file>`
   - `scripts/validate-layout-rule-usage <html-file>` for page/layout outputs
   - `scripts/validate-typography-rule-usage <html-file>` for page/layout outputs
   - `scripts/validate-page-layout-typography <html-file>` for business/admin page title and layout defaults
   - `scripts/validate-app-shell-scroll <html-file>` for fixed app shell and content-only scrolling
   - `scripts/validate-icon-usage <html-file>` for Icon/ButtonIcon provenance and no functional glyph fallback
   - `scripts/validate-information-aggregation-page <html-file>` for information aggregation pages
   - `scripts/validate-admin-template-navigation <html-file>` for admin page outputs
   - `scripts/validate-admin-page-profile <html-file>` for admin query/list/data-entry outputs
   - `scripts/validate-reference-fit <html-file>` for admin query/list/data-entry outputs
   - `scripts/validate-component-package-dom <component-id>`
   - `scripts/validate-component-package-html-batch`
   - `scripts/validate-provenance <html-file>`
   - `scripts/run-evaluation-benchmark`
   - `scripts/validate-evaluation-benchmark`
19. Report the generated file, matched registry item, and validation results.

## Primitive Coverage

The complete normalized primitive is Checkbox:

- Primitive contract: `design-system/primitives/components/checkbox/primitive.json`
- Demo registry: `design-system/primitives/components/checkbox/demo.registry.json`
- Form pattern: `design-system/patterns/forms/checkbox-group.pattern.json`
- Example output: `outputs/html/checkbox.prototype.html`

The admin dashboard also uses Storybook-backed static contracts for:

- `container`
- `grid`
- `sidebar`
- `menu`
- `navigation-header`
- `search-input`
- `select`
- `button`
- `tabs`
- `card`
- `tag`
- `progress-bar`

These contracts require registered `data-primitive` values and verified Storybook `data-story-id` values. Table areas must use `business-table.contract.json` fallback until an official Table/DataGrid primitive is registered. Chart areas must use `business-chart.contract.json`; BarChart is allowed only when its required props and accessibility contract are present, while unsupported chart types stay as fallbacks.

Button has a complete standard package:

- Package: `design-system/atomic/components/button/button.package.json`
- Docs contract: `design-system/atomic/components/button/docs/button.docs.contract.json`
- Expected tabs: `design-system/atomic/components/button/button.expected-tabs.json`
- Complete output: `outputs/html/button-complete.atomic.html`
- Component DOM gate: `scripts/validate-component-package-dom button`
- Batch HTML gate: `scripts/validate-component-package-html-batch`
- Rule: resolve Button requests through the complete package first. Use `Button Link` only with anchor semantics. Use `Overview` and `Overview Inverse` as matrix stories, not as ordinary variants.

For every other component, first check `design-system/atomic/component-coverage-matrix.json`. Do not treat a component as package-complete until its matrix row is `package_status: "complete"` and its package passes `validate-component-package-dom`; run `validate-component-package-html-batch` before claiming the whole component package library is complete.

Other component pages are listed in `design-system/primitives/component-catalog.json` and demo coverage is summarized in `design-system/primitives/demo-coverage.md`.

## Generation Rules

- Do not scan all Markdown docs as the first step. Search the local registry first, then load only the matched item dependencies and provenance files.
- Remote Storybook, Zeroheight, or GitHub links are refresh sources only. Normal generation uses local Markdown, contracts, tokens, registry items, and validators.
- Use native semantic HTML for static prototypes unless the captured primitive explicitly requires another structure.
- Keep Elements provenance in `data-source-component` and `data-story-id` attributes.
- Use `data-primitive` for every generated primitive instance.
- Use `data-pattern` for page or section-level patterns.
- Use `var(--elements-...)` references for Elements tokens.
- Persistent left navigation is not a Tabs component. Use Sidebar compound parts (`root/header/content/section/item/footer`) for the left rail. Use `tabs` only for horizontal content switching inside the main area.
- For color styling, do not directly reference `--elements-color-core-*` in generated HTML. Use `--elements-color-semantic-*`, `--elements-color-components-*`, or `--elements-color-data-*` according to the UI role.
- Sanofi brand/accent is the purple brand family from `Foundations / Colors` (`Brand / Sanofi Miracle Purple`); never use green as the page brand, primary chart, primary progress, navigation, or main action color.
- Use green only for explicit success/status meanings or a deliberately labeled data series. Default dashboard bars, progress fills, selected states, and primary affordances must use `--elements-color-semantic-accent-*`, brand component tokens, or purple data visualization tokens.
- Do not hard-code hex colors, RGB colors, or pixel values in generated prototype CSS.
- Do not hard-code `box-shadow`; use `--elements-core-elevation-01` through `--elements-core-elevation-05` and add `data-elevation-role` plus `data-elevation-token` markers on layered generated surfaces.
- Do not hard-code, tighten, or make negative `letter-spacing`; generated business/admin pages must use `--elements-core-font-letterspacing-default`.
- Use the PageHeader primitive for generated page title regions. Keep title and description stacked; put badges/actions in a separate action area.
- Use content-only scrolling for generated business/admin pages. Do not rely on body scrolling when a topbar or left navigation is present.
- For information aggregation requests, use the `information-aggregation` profile and include query filters, dashboard summary, chart context, record list, and pagination together. Do not substitute a standalone dashboard or a plain query list.
- Do not claim a Table, Chart, Metric, Modal, Drawer, DatePicker, or PageHeader primitive unless it exists in `primitive-index.json`; use the registered fallback policy instead.
- Do not generate a generic dashboard for approval, detail, create/edit form, import result, permission, or exception requests; select the corresponding page profile first.
- Do not remove default left-nav icons, compress form grids, or change medium component size unless the user explicitly requests that override. Generated pages must expose `data-default-rule="business-admin-defaults"` when defaults are used.
- Do not use text glyphs or naked SVG as functional icons. Navigation, sidebar toggle, tree toggle, form-control, and link affordance icons must use `data-primitive="icon"` with `data-icon-role`, `data-icon-name`, and `data-icon-size`.
- Do not replace Container/Grid anatomy with plain wrapper divs. Generated page layout must include `contentContainer`, `Grid.Root`, and `Grid.Item` equivalent markers.
- Do not allow the topbar/navigation shell to scroll away with content unless the user explicitly requests a document-style page.
- Do not remove default elevation markers or downgrade header/sticky action elevation unless the user explicitly requests a visual override.
- Every generated major section must be traceable to a docs id, story id where applicable, token source, pattern id, and fallback reason where applicable.
- Include a clear `<main>` landmark and a meaningful `<title>`.
- Prefer compact, product-like pages over marketing-style landing pages unless the request explicitly asks for a landing page.

## Validation Standard

A generated prototype is done only when all applicable scripts pass and the report files under `outputs/reports/` show `status: "pass"`.

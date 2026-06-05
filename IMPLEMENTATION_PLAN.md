# Adapter-First Page Generation Implementation Plan

## Stage 1: Adapter Contract Baseline

Goal: Add a local component adapter standard that makes official runtime, local adapter, renderer static, and fallback output explicit.

Success Criteria:
- Adapter standard exists as local JSON.
- High-risk components have adapter metadata: navigation-header, sidebar, select, date-picker, text-input, button.
- Each adapter declares source provenance, DOM parts, style owner, and state matrix.

Tests:
- New validator can read the adapter registry.
- Missing adapter markers fail validation.

Status: Complete

## Stage 2: Runtime Adapter Markup

Goal: Update local component runtime so generated Select, DatePicker, Sidebar, and NavigationHeader expose adapter ids, source integrity, style ownership, and state matrix markers.

Success Criteria:
- Select and DatePicker are no longer only story-id marked; they are local adapter marked.
- Sidebar controlled mode is rendered from runtime adapter instead of page-local `operationsSidebar()`.
- NavigationHeader exposes adapter ownership and Sidebar.CollapseToggle source.

Tests:
- Business page render succeeds.
- Component runtime validation still passes.

Status: Complete

## Stage 3: Validator Gate Expansion

Goal: Add validators for runtime honesty, style ownership, and state matrix so page generation cannot pass by marker-only provenance.

Success Criteria:
- Adapter-first pages fail when a high-risk component lacks adapter id.
- Renderer layout styles are split from component adapter styles.
- DatePicker/Select/Sidebar open/focus/expanded states are checked structurally.

Tests:
- New validators pass on rerendered operations page.
- Existing token, primitive, page-pattern, layout, icon, motion checks still pass.

Status: Complete

---

# Temporary shadcn Operations Admin Demo Plan

## Stage 1: Source Boundary

Goal: Use shadcn/ui as a temporary reference without installing or retaining copied component source in this repository.

Success Criteria:
- shadcn/ui source is read only from a temporary location.
- No `components/ui` shadcn source files are created in the project.

Tests:
- Confirm the temporary directory is removed.
- Search the repository for retained shadcn component-source traces.

Status: In Progress

## Stage 2: Demo Build

Goal: Create a directly openable operations admin demo with a complex query form and a list shown after query.

Success Criteria:
- The demo includes app shell, icon sidebar, fixed topbar, content-only scroll, PageHeader, Container/Grid markers, complex filters, query actions, active filter chips, loading/empty/error feedback hooks, and a result list/table.
- The demo is static HTML and does not claim real shadcn React runtime.

Tests:
- Inspect the generated HTML and verify required structure and interactions are present.

Status: In Progress

## Stage 3: Browser Verification

Goal: Verify the demo in a browser-sized desktop viewport.

Success Criteria:
- At 1440 x 900 the sidebar, topbar, filter area, action region, and result list fit without obvious overlap.
- Select popovers and query/reset interactions work.

Tests:
- Local browser screenshot plus DOM/geometry checks.

Status: In Progress

## Stage 4: Cleanup and Report

Goal: Clean temporary shadcn source and report the runtime/source boundary honestly.

Success Criteria:
- Temporary source is gone.
- The demo remains accessible.
- Verification artifacts are recorded.

Tests:
- `git status --short`
- Repository search for retained shadcn source
- Screenshot/report path check

Status: Pending

## Stage 4: Rerender Operations Page

Goal: Re-render `operations-three-level-date-query.resolved.html` through adapter-first output and inspect it in browser.

Success Criteria:
- Page contains adapter-first markers.
- DatePicker and Sidebar are local adapter output, not renderer static output.
- Validation reports show pass.
- Browser screenshot is regenerated.

Tests:
- Run render script.
- Run all page validators for the operations page.
- Capture browser metrics/screenshot.

Status: Complete

---

# Sanofi HTML Completeness and CLI Absorption Audit Plan

## Stage 1: Source and Local Contract Audit

Goal: Audit whether Sanofi Data Visualization and current local rules are available as renderer-consumable sources.

Success Criteria:
- Zeroheight Data Visualization capture boundary is recorded.
- Storybook index/stories are refreshed locally for component/source decisions.
- Existing local chart, table, page-profile, and runtime contracts are inspected.

Tests:
- Confirm fetched files exist under `outputs/reports/web-research/sanofi-data-visualization/`.
- Confirm local chart/table/page source files are readable.

Status: Complete

---

# Sanofi HTML Dependency Repair Implementation Plan

## Stage 1: Component Source Resolution

Goal: Generalize the OneOrbit source resolver into a suite-aware component source resolver.

Success Criteria:
- `scripts/resolve-component-sources` writes `outputs/reports/component-source-resolution.json` and `.md`.
- `scripts/validate-component-source-resolution` validates decisions and fallback honesty.
- DateRange resolves to `local-adapter-via-date-picker-range`.
- Table remains explicit fallback and MessageList remains compound block.

Tests:
- `scripts/resolve-component-sources --suite oneorbit-approval-suite`
- `scripts/validate-component-source-resolution outputs/reports/component-source-resolution.json`

Status: Complete

## Stage 2: Adapter Registry Coverage

Goal: Align first-round runtime components with adapter registry coverage and validation.

Success Criteria:
- Adapter registry covers every first-round component in `component-runtime.contract.json`.
- Layout-level components are marked as local layout adapters, not official runtime.
- Adapter integrity validation checks all first-round components.

Tests:
- `scripts/validate-component-adapter-integrity outputs/html/oneorbit-has-query-list.resolved.html`

Status: Complete

## Stage 3: Data Visualization Contract

Goal: Add a local Data Visualization foundation/rule/contract without inventing unavailable Zeroheight content.

Success Criteria:
- `foundations-data-visualization--docs.md` exists with pending-capture boundary.
- `rules/data-visualization-usage.json` validates data token usage policy.
- `contracts/page-modules/data-visualization.contract.json` defines chart anatomy and fallback policy.
- `business-chart.contract.json` points to existing source evidence.

Tests:
- `scripts/validate-data-visualization-usage`
- `scripts/validate-business-standards`

Status: Complete

## Stage 4: Page Suite and Renderer Entry

Goal: Add a OneOrbit page-suite layer and render OneOrbit pages through suite + source-resolution input.

Success Criteria:
- `design-system/page-suites/oneorbit-approval-suite.contract.json` exists.
- OneOrbit query-list and message-todo registry blocks exist without duplicating existing dashboard blocks.
- `scripts/render-page-suite-html` supports `--suite oneorbit-approval-suite --page query-list|message-todo`.
- OneOrbit output continues to use local runtime, explicit fallback, and source maps.

Tests:
- `scripts/validate-page-suite design-system/page-suites/oneorbit-approval-suite.contract.json`
- `scripts/render-page-suite-html --suite oneorbit-approval-suite --page query-list`
- `scripts/render-page-suite-html --suite oneorbit-approval-suite --page message-todo`

Status: Complete

## Stage 5: Final Validation and Desktop Evidence

Goal: Run the requested validator chain and capture 1440 desktop evidence.

Success Criteria:
- Required validators pass or report a concrete remaining blocker.
- 1440 desktop screenshot/metrics confirm no obvious overlap or horizontal overflow.
- Final report lists source-resolution, component names, fallback reasons, and layout basis.

Tests:
- `scripts/validate-design-md`
- `scripts/validate-local-registry`
- `scripts/validate-business-standards`
- `scripts/validate-component-runtime outputs/html/oneorbit-has-query-list.resolved.html`
- `scripts/validate-oneorbit-delivery`
- `scripts/validate-reference-fit outputs/html/oneorbit-has-query-list.resolved.html`

Status: Complete

## Stage 2: Ant Design and shadcn Comparison

Goal: Compare Ant Design and shadcn from current documentation, focusing on what the local Sanofi renderer should absorb.

Success Criteria:
- Ant Design strengths are mapped to admin page structure, density, theme, and SSR/static extraction.
- shadcn strengths are mapped to registry, blocks, local files, and dependency metadata.
- The comparison avoids proposing either library as a replacement for Sanofi provenance.

Tests:
- Context7 documentation lookup completed for both Ant Design and shadcn/ui.

Status: Complete

## Stage 3: Gap Model and Absorption Path

Goal: Produce a report that explains why generated HTML feels incomplete and how to fix the chain.

Success Criteria:
- The report distinguishes missing source capture, missing page-suite recipe, missing runtime consumption, and legitimate fallback.
- The report includes a concrete Renderer v2 path for complete page generation.
- The report names files and validators that should be added or tightened next.

Tests:
- Report file exists under `outputs/reports/`.
- Report references local evidence and current source boundaries.

Status: Complete

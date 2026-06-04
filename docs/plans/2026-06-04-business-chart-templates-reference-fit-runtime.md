# Business Chart Templates Reference Fit Runtime Implementation Plan

**Goal:** Promote researched BarChart into the business chart module path, add two page templates, make reference-fit validation profile-aware, and report output state without mixing official runtime, local atomic runtime, and fallback.

**Architecture:** Keep the existing local-first design-system model: `DESIGN.md`, registry items, pattern/template indexes, module contracts, HTML examples, and validators. The change is mostly contract and validator work, with minimal HTML updates to prove the new rules are enforceable.

**Tech Stack:** Node.js CommonJS validator scripts, JSON contracts/rules/templates, static HTML outputs, Sanofi Elements local registry.

**Status:** Completed.

---

### Task 1: Promote BarChart

**Status:** Completed.

**Files:**
- Modify: `design-system-plugin/design-system/policies/fallback-policy.json`
- Modify: `design-system-plugin/design-system/patterns/admin-dashboard/admin-dashboard.pattern.json`
- Modify: `design-system-plugin/design-system/registry/items/sanofi-admin-dashboard.json`
- Modify: `design-system-plugin/outputs/html/admin-dashboard.resolved.html`

**Steps:**
1. Replace generic chart fallback language with a `business-chart` allowed module for BarChart.
2. Keep unsupported chart types as fallback-only.
3. Mark dashboard chart output with `data-business-module="business-chart"`, `data-chart-contract="business-chart"`, `data-chart-kind="bar"`, and `data-source-component="BarChart"`.
4. Keep exact-value access through an adjacent or embedded data table.
5. Run `scripts/validate-business-standards` and `scripts/validate-page-pattern outputs/html/admin-dashboard.resolved.html`.

### Task 2: Add Multi-Module Templates

**Status:** Completed.

**Files:**
- Modify: `design-system-plugin/design-system/templates/template-index.json`
- Create: `design-system-plugin/design-system/templates/report-dashboard.template.json`
- Create: `design-system-plugin/design-system/templates/information-aggregation.template.json`
- Modify: `design-system-plugin/design-system/patterns/pattern-index.json`
- Create: `design-system-plugin/design-system/patterns/report-dashboard/report-dashboard.pattern.json`
- Create: `design-system-plugin/design-system/patterns/information-aggregation/information-aggregation.pattern.json`

**Steps:**
1. Add template entries for `report-dashboard` and `information-aggregation`.
2. Add matching page pattern entries that bind page profile, module contracts, required rules, reference-fit, and output target.
3. Keep the templates declarative; do not add a new renderer until the contracts are validated.
4. Run `scripts/validate-business-standards`, `scripts/validate-design-md`, and `scripts/validate-local-registry`.

### Task 3: Make Reference Fit Profile-Aware

**Status:** Completed.

**Files:**
- Modify: `design-system-plugin/scripts/validate-reference-fit`

**Steps:**
1. Parse optional `--profile` and `--rule` arguments while still accepting a positional HTML file.
2. Infer `data-page-profile`, `data-page-family`, and `data-reference-fit` from the HTML body when no option is provided.
3. Select `admin-data-entry-table.rules.json`, `admin-dashboard-chart.rules.json`, or `business-page-family.rules.json` based on profile/reference-fit.
4. Validate body markers, required sections, chart markers, fallback markers, and static counts according to the selected rule shape.
5. Write the selected rule into `outputs/reports/reference-fit.report.json`.

### Task 4: Report Output State

**Status:** Completed.

**Files:**
- Modify: `design-system-plugin/scripts/validate-component-runtime`
- Modify: `design-system-plugin/design-system/rules/component-runtime-contract.json`
- Modify: `design-system-plugin/design-system/DESIGN.md`

**Steps:**
1. Count official runtime markers: `data-component-runtime="sanofi-elements-react"` and `data-render-source="@sanofi-accelerator/elements"`.
2. Count local atomic runtime markers: `data-component-runtime="sanofi-local-atomic-components"` and `data-render-source="local-atomic-component-package"`.
3. Count explicit fallback modules and require every fallback to include `data-fallback-reason`.
4. Report `official-runtime`, `local-atomic-runtime`, and `explicit-fallback` separately.
5. Keep local atomic runtime valid, but do not allow it to be described as official runtime.

### Task 5: Final Verification

**Status:** Completed.

**Files:**
- Modify: `IMPLEMENTATION_PLAN.md`

**Steps:**
1. Run:
   - `scripts/validate-design-md`
   - `scripts/validate-business-standards`
   - `scripts/validate-local-registry`
   - `scripts/validate-page-pattern outputs/html/admin-dashboard.resolved.html`
   - `scripts/validate-component-runtime outputs/html/admin-dashboard.resolved.html`
   - `scripts/validate-reference-fit outputs/html/admin-dashboard.resolved.html`
   - `scripts/validate-reference-fit outputs/html/admin-query-panel.resolved.html`
2. Inspect generated JSON reports for selected reference-fit rule and output state counts.
3. Update `IMPLEMENTATION_PLAN.md` statuses with actual results.

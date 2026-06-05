# Information Aggregation Page Implementation Plan

**Goal:** Add a business information aggregation page that combines query filters, dashboard summary, and record list in one page family.

**Architecture:** Treat the page as a first-class business page profile, not a one-off mockup. The profile is indexed in taxonomy and business standards, rendered by the business examples generator, and validated by a dedicated page validator plus the shared business gates.

**Tech Stack:** Local Sanofi Elements design-system plugin, JSON page profiles, Node.js render/validate scripts, static HTML outputs.

---

### Task 1: Standardize Page Profile

**Files:**
- Create: `design-system-plugin/design-system/page-profiles/information-aggregation.profile.json`
- Modify: `design-system-plugin/design-system/page-profiles/page-profile-index.json`
- Modify: `design-system-plugin/design-system/business/page-taxonomy.json`
- Modify: `design-system-plugin/design-system/business/business-standards-index.json`
- Modify: `design-system-plugin/design-system/rules/business-page-standards.json`

**Steps:**
1. Add `information-aggregation` with required sections: `breadcrumb`, `aggregation-header`, `filter-toolbar`, `dashboard-summary`, `record-list`, `pagination`.
2. Require `business-form`, `business-chart`, and `business-table` module contracts.
3. Add taxonomy aliases for 信息聚合, 查询列表看板, aggregation, query dashboard list.
4. Add the profile to required standards lists.
5. Run `node design-system-plugin/scripts/validate-business-standards` and expect it to include 9 page profiles.

### Task 2: Render The HTML

**Files:**
- Modify: `design-system-plugin/scripts/render-business-page-examples`
- Output: `design-system-plugin/outputs/html/information-aggregation.resolved.html`

**Steps:**
1. Reuse the existing app shell, PageHeader, Container, Grid, token, elevation, and content-only scroll defaults.
2. Add sidebar navigation entry for 信息聚合 with an icon.
3. Add query filters, KPI cards, chart fallback, data table fallback, and pagination.
4. Mark all modules with `data-business-module`, `data-section`, `data-page-profile`, `data-page-family`, and `data-business-task`.
5. Run `node design-system-plugin/scripts/render-business-page-examples`.

### Task 3: Validate The Page

**Files:**
- Create: `design-system-plugin/scripts/validate-information-aggregation-page`
- Modify: `design-system-plugin/scripts/validate-business-page-examples`
- Modify: `design-system-plugin/scripts/sanofi-ds`
- Modify: `design-system-plugin/components.json`

**Steps:**
1. Write a validator that fails when query, dashboard, and list sections are not present together.
2. Require at least 4 filters, 4 KPI cards, 1 chart fallback, 6 table columns, and pagination.
3. Require content-only app shell scroll markers and existing layout/typography markers.
4. Add CLI/metadata entrypoints.
5. Run `node --check` on changed scripts and run the validator directly.

### Task 4: Document And Cursor Workflow

**Files:**
- Modify: `design-system-plugin/design-system/DESIGN.md`
- Modify: `design-system-plugin/skills/design-prototype-generator/SKILL.md`
- Modify: `.cursor/rules/sanofi-design-system.mdc`

**Steps:**
1. Document `information-aggregation` as the default single-page aggregation profile.
2. Require generated pages to include query, dashboard, and list areas in one content scroll region.
3. Add the direct validation command to Cursor and skill workflows.
4. Run `node design-system-plugin/scripts/validate-design-md`.

### Task 5: Verify Delivery

**Files:**
- Output: `design-system-plugin/outputs/reports/information-aggregation-page.report.json`
- Output: `design-system-plugin/outputs/reports/information-aggregation.resolved-desktop-1440.png`

**Steps:**
1. Regenerate all business examples.
2. Run page-specific validator and shared validators: token, elevation, layout, typography, app shell scroll, business standards, local registry.
3. Generate a desktop screenshot.
4. Inspect screenshot and report the local HTML path, screenshot path, and validation result.

**Commit:** Not applicable in this workspace because `<repo-root>` is not a git repository.

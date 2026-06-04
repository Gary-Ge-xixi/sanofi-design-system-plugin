# Business Page Standards And Cursor Workflow Implementation Plan

**Goal:** Promote the missing business-page standards into local executable design-system inputs so generated Sanofi admin pages can be judged by business scenario, workflow, data model, interaction state, density, and visual-fit rules.

**Architecture:** Add structured JSON standards under the existing design-system folders and validate them through a new `validate-business-standards` script. Keep renderer changes out of this pass; the fix is to make standards discoverable and enforceable before expanding page generation.

**Tech Stack:** Node.js CLI scripts, local JSON contracts, Sanofi Elements registry/rules/profile/reference-fit architecture, Cursor project rules.

---

### Task 1: Write Standards Coverage Validator

**Files:**
- Create: `design-system-plugin/scripts/validate-business-standards`
- Modify: `design-system-plugin/scripts/sanofi-ds`

**Goal:** Add one command that checks all requested standard areas exist and writes a report.

**Success Criteria:**
- Validator checks 11 areas: page taxonomy, task flows, data model, table, chart, form, density, content, interaction, visual acceptance, Cursor workflow.
- Report lands in `design-system-plugin/outputs/reports/business-standards.report.json`.

**Tests:**
- `node --check design-system-plugin/scripts/validate-business-standards`
- `design-system-plugin/scripts/validate-business-standards`

**Status:** Completed

### Task 2: Add Business Standards And Page Profiles

**Files:**
- Create: `design-system-plugin/design-system/business/business-standards-index.json`
- Create: `design-system-plugin/design-system/business/page-taxonomy.json`
- Create: `design-system-plugin/design-system/business/task-flow-standard.json`
- Create: `design-system-plugin/design-system/business/data-model-standard.json`
- Create: `design-system-plugin/design-system/business/content-standard.json`
- Create: `design-system-plugin/design-system/business/interaction-state-standard.json`
- Create: `design-system-plugin/design-system/page-profiles/approval-workflow.profile.json`
- Create: `design-system-plugin/design-system/page-profiles/entity-detail.profile.json`
- Create: `design-system-plugin/design-system/page-profiles/entity-form.profile.json`
- Create: `design-system-plugin/design-system/page-profiles/import-result.profile.json`
- Create: `design-system-plugin/design-system/page-profiles/report-dashboard.profile.json`
- Create: `design-system-plugin/design-system/page-profiles/permission-admin.profile.json`
- Create: `design-system-plugin/design-system/page-profiles/exception-state.profile.json`
- Modify: `design-system-plugin/design-system/page-profiles/page-profile-index.json`

**Goal:** Cover the missing business page categories as explicit page profiles.

**Success Criteria:**
- Each requested page family has a profile.
- Page taxonomy maps aliases, required sections, core tasks, fallback policy, and reference-fit requirement.

**Tests:**
- `design-system-plugin/scripts/validate-business-standards`

**Status:** Completed

### Task 3: Add Module Contracts And Rules

**Files:**
- Create: `design-system-plugin/design-system/contracts/page-modules/business-table.contract.json`
- Create: `design-system-plugin/design-system/contracts/page-modules/business-form.contract.json`
- Create: `design-system-plugin/design-system/contracts/page-modules/business-chart.contract.json`
- Create: `design-system-plugin/design-system/rules/business-page-standards.json`
- Create: `design-system-plugin/design-system/rules/table-usage.json`
- Create: `design-system-plugin/design-system/rules/chart-usage.json`
- Create: `design-system-plugin/design-system/rules/form-usage.json`
- Create: `design-system-plugin/design-system/rules/density-standards.json`
- Create: `design-system-plugin/design-system/rules/content-standards.json`
- Create: `design-system-plugin/design-system/rules/interaction-state-standards.json`
- Modify: `design-system-plugin/design-system/rules/rules-index.json`

**Goal:** Make table, chart, form, density, content, and interaction rules executable.

**Success Criteria:**
- Rules declare required data attributes, forbidden claims, and validation expectations.
- Chart rule incorporates BarChart research from the Storybook docs and extracted bundles.

**Tests:**
- `design-system-plugin/scripts/sanofi-ds rule list`
- `design-system-plugin/scripts/validate-business-standards`

**Status:** Completed

### Task 4: Add Visual Acceptance And Cursor Workflow

**Files:**
- Create: `design-system-plugin/design-system/reference-fit/business-page-family.rules.json`
- Create: `design-system-plugin/design-system/reference-fit/admin-dashboard-chart.rules.json`
- Create: `.cursor/rules/sanofi-design-system.mdc`
- Modify: `design-system-plugin/components.json`
- Modify: `design-system-plugin/design-system/DESIGN.md`
- Modify: `design-system-plugin/skills/design-prototype-generator/SKILL.md`

**Goal:** Extend visual acceptance beyond OneCommercial query/fill and make Cursor usage follow the same local-first chain.

**Success Criteria:**
- Reference-fit standards cover every new page family.
- Cursor rule lists required workflow and validator commands.
- `DESIGN.md` and skill entry mention business standards and Cursor route.

**Tests:**
- `design-system-plugin/scripts/validate-design-md`
- `design-system-plugin/scripts/validate-business-standards`

**Status:** Completed

### Task 5: Verify Existing Chain

**Files:**
- Modify: `IMPLEMENTATION_PLAN.md`

**Goal:** Confirm standards landed without regressing existing admin outputs.

**Success Criteria:**
- Existing core validators still pass.
- Active plan statuses are updated.
- No file deletion is performed without approval.

**Tests:**
- `design-system-plugin/scripts/validate-business-standards`
- `design-system-plugin/scripts/validate-design-md`
- `design-system-plugin/scripts/validate-local-registry`
- `design-system-plugin/scripts/validate-admin-page-profile design-system-plugin/outputs/html/admin-query-panel.resolved.html`
- `design-system-plugin/scripts/validate-reference-fit design-system-plugin/outputs/html/admin-query-panel.resolved.html`

**Status:** Completed

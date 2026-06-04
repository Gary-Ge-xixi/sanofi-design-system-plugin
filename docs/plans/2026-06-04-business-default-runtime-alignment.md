# Business Default Runtime Alignment Implementation Plan

**Goal:** Align business page defaults with Sanofi component runtime guardrails so Select and DatePicker no longer pass through story-only or native fallback structures.

**Architecture:** Keep official docs and story extracts as source material, but add an executable arbitration layer that chooses API defaults over Storybook example args. Reuse the existing local atomic runtime markers for generated static HTML where private Sanofi packages are unavailable.

**Tech Stack:** Node.js scripts, static HTML renderer, Sanofi Elements local contracts, validator scripts, JSON rule files.

---

### Task 1: Default Value Arbitration

**Files:**
- Create: `design-system-plugin/scripts/validate-default-value-arbitration`
- Modify: `design-system-plugin/design-system/rules/component-size-policy.json`
- Modify: `design-system-plugin/design-system/rules/business-admin-defaults.json`
- Modify: `design-system-plugin/design-system/DESIGN.md`

**Steps:**
1. Add a validator that reads Select and DatePicker docs/contracts/stories.
2. Fail if API docs expose `medium` default but generation policy lacks API-over-story arbitration.
3. Fail if renderer outputs use `large` without an explicit override.
4. Run `node design-system-plugin/scripts/validate-default-value-arbitration`.

### Task 2: Local Runtime DatePicker

**Files:**
- Modify: `design-system-plugin/component-runtime/component-runtime.contract.json`
- Modify: `design-system-plugin/component-runtime/src/local-components.cjs`
- Modify: `design-system-plugin/scripts/validate-component-runtime`

**Steps:**
1. Add DatePicker to local runtime metadata and first-round runtime guardrails.
2. Add a static DatePicker equivalent with combobox trigger, dialog container, calendar icon, medium size metadata, and edge-safe spacing.
3. Extend runtime script to open and close DatePicker dialogs.
4. Extend runtime validation to check DatePicker trigger/dialog structure.

### Task 3: Business Renderer Upgrade

**Files:**
- Modify: `design-system-plugin/scripts/render-business-page-examples`
- Outputs: `design-system-plugin/outputs/html/business-query-form.resolved.html`
- Outputs: `design-system-plugin/outputs/html/information-aggregation.resolved.html`
- Outputs: `design-system-plugin/outputs/html/business-entity-detail.resolved.html`

**Steps:**
1. Import the local runtime helper in the business renderer.
2. Replace visible native Select HTML with local runtime Select.
3. Replace DatePicker static input wrapper with local runtime DatePicker.
4. Include local runtime styles and script in generated business pages.
5. Run `node design-system-plugin/scripts/render-business-page-examples`.

### Task 4: Business Validator Upgrade

**Files:**
- Modify: `design-system-plugin/scripts/validate-business-page-examples`
- Modify: `design-system-plugin/scripts/validate-information-aggregation-page`

**Steps:**
1. Count runtime Select roots instead of raw `<select>` controls.
2. Fail on visible native Select primitive.
3. Require Select combobox/listbox markers.
4. Require DatePicker medium/root/trigger/dialog markers.
5. Require local runtime script when first-round components are present.

### Task 5: Verification

**Files:**
- Reports under `design-system-plugin/outputs/reports/`

**Steps:**
1. Run default arbitration validation.
2. Run business page validators.
3. Run component runtime validation on business query form, information aggregation, and admin query panel.
4. Run layout, scroll, elevation, and design validators.
5. Record any remaining fallback boundaries.

# Sanofi Component Runtime Implementation Plan

**Goal:** Add a guardrailed Sanofi Elements runtime boundary so page HTML cannot pass validation by using hand-authored component-like DOM.

**Architecture:** Page renderers emit component specs. The local runtime package resolves `@sanofi-accelerator/elements`, renders hydrated React components, and emits JS/CSS-backed HTML. Until package access is available, preflight and validators fail fast instead of falling back to fake component DOM.

**Tech Stack:** Node.js scripts, JSON contracts, Sanofi Elements design-system registry, HTML validators, `@sanofi-accelerator/elements` as a peer dependency.

---

### Task 1: Runtime Package Boundary

**Files:**
- Create: `design-system-plugin/component-runtime/package.json`
- Create: `design-system-plugin/component-runtime/README.md`
- Create: `design-system-plugin/component-runtime/component-runtime.contract.json`

**Steps:**
1. Declare the internal package as private.
2. Add `@sanofi-accelerator/elements` as a peer dependency.
3. Document that no hand-written fallback DOM is allowed.
4. Parse package and contract JSON.

### Task 2: Component Spec And Preflight

**Files:**
- Create: `design-system-plugin/component-runtime/specs/admin-dashboard.component-spec.json`
- Create: `design-system-plugin/component-runtime/scripts/preflight-elements-package.mjs`

**Steps:**
1. Define dashboard component instances for the first-round backend components.
2. Add a preflight that checks npm scope registry, package token presence, and package resolution.
3. Write a preflight report to `outputs/reports/component-runtime-preflight.report.json`.
4. Verify the script fails when the official package is unavailable.

### Task 3: Runtime Validation

**Files:**
- Create: `design-system-plugin/scripts/validate-component-runtime`
- Modify: `design-system-plugin/scripts/validate-primitive-usage`
- Modify: `design-system-plugin/design-system/rules/primitive-usage.json`

**Steps:**
1. Add a validator that checks runtime markers, hydration script, component instances, and forbidden visible native Select.
2. Tighten primitive usage for admin/dashboard Select so visible native Select no longer passes.
3. Verify current dashboard fails until official runtime rendering is wired.

### Task 4: Interface And Registry Surface

**Files:**
- Modify: `design-system-plugin/design-system/DESIGN.md`
- Create: `design-system-plugin/design-system/rules/component-runtime-contract.json`
- Modify: `design-system-plugin/design-system/rules/rules-index.json`
- Modify: `design-system-plugin/scripts/build-local-registry`

**Steps:**
1. Add the component runtime rule to the AI-readable design interface.
2. Register the new rule and validator.
3. Add runtime files to the workflow registry item.
4. Build and validate the registry.

### Task 5: Verification

**Files:**
- Modify: `IMPLEMENTATION_PLAN.md`

**Steps:**
1. Run syntax checks.
2. Run preflight and inspect blocker report.
3. Run runtime validator and inspect failure reasons.
4. Run design and registry validators.
5. Update plan statuses with actual results.

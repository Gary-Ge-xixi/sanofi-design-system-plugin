# Button Atomic V2 Implementation Plan

**Goal:** Build a local Button atomic V2 contract and render the `components-button--secondary-neutral` reference sheet.

**Architecture:** Reuse the current Storybook atomic pipeline. Extend story materialization so multiple Button stories can coexist, then build a component-level V2 contract consumed by the HTML renderer.

**Tech Stack:** Node.js scripts, JSON contracts, local Storybook index/assets, standalone HTML/CSS using Sanofi token variables.

---

### Task 1: Preserve Multi-Story Materialization

**Files:**
- Modify: `design-system-plugin/scripts/materialize-story-atom`

**Steps:**
1. Change the template/output path so each story renders to its own HTML file.
2. Merge new story metadata into `button/component.atomic.json` instead of overwriting prior stories.
3. Save `components-button--secondary-neutral.story.json`.

**Tests:**
- Run `node design-system-plugin/scripts/materialize-story-atom components-button--secondary-neutral`.
- Expected: `secondary-neutral` story file exists and Primary story remains indexed.

### Task 2: Build Button Atomic V2 Contract

**Files:**
- Modify: `design-system-plugin/scripts/build-atomic-library`
- Modify/Create through script: `design-system-plugin/design-system/atomic/components/button/component.atomic.json`

**Steps:**
1. Derive Button variants from the component contract and story ids.
2. Add static V2 dimensions that are verified from Button Storybook bundle: sizes, states, icon positions, and overview matrix.
3. Bind color roles to registered component/semantic tokens and mark non-extracted exact CSS values clearly.

**Tests:**
- Run `node design-system-plugin/scripts/build-atomic-library`.
- Expected: `button/component.atomic.json` has `atomic_contract_version: "0.2.0"` and non-empty variant/size/state/token/anatomy sections.

### Task 3: Render Reference Sheet HTML

**Files:**
- Modify: `design-system-plugin/scripts/render-atomic-html`
- Add: `design-system-plugin/design-system/atomic/components/button/templates/html.button-v2.template.html`
- Generate: `design-system-plugin/outputs/html/button-secondary-neutral.atomic.v2.html`

**Steps:**
1. Add Button V2 rendering path that expands size/state/icon/token tables from the contract.
2. Use token variables only; no raw colors, direct core color refs, or raw px values.
3. Include provenance attributes on every rendered Button sample.

**Tests:**
- Run `node design-system-plugin/scripts/render-atomic-html components-button--secondary-neutral`.
- Expected: output HTML contains variant, size, state, anatomy, token binding, and source sections.

### Task 4: Validate Registry and Outputs

**Files:**
- Modify: `design-system-plugin/scripts/validate-atomic-library`
- Generated reports under: `design-system-plugin/outputs/reports/`

**Steps:**
1. Enforce Button V2 contract required sections.
2. Rebuild registry and validate local registry.
3. Run token, primitive, page-pattern, provenance, and benchmark checks.

**Tests:**
- `node design-system-plugin/scripts/validate-atomic-library`
- `node design-system-plugin/scripts/build-local-registry`
- `node design-system-plugin/scripts/validate-local-registry`
- `node design-system-plugin/scripts/validate-token-usage design-system-plugin/outputs/html/button-secondary-neutral.atomic.v2.html`
- `node design-system-plugin/scripts/validate-primitive-usage design-system-plugin/outputs/html/button-secondary-neutral.atomic.v2.html`
- `node design-system-plugin/scripts/validate-page-pattern design-system-plugin/outputs/html/button-secondary-neutral.atomic.v2.html`

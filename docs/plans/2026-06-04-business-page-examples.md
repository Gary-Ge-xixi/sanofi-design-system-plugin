# Business Page Examples Implementation Plan

**Goal:** Generate a query-enabled form page and an entity detail page that use the new Sanofi business standards, page profiles, module contracts, and validation flow.

**Architecture:** Add a small Node renderer that writes two static HTML outputs from local standards and a paired validator that checks required profile sections, business module contracts, states, and forbidden unsupported primitive claims. Keep this as examples/proof-of-capability rather than changing the main resolver.

**Tech Stack:** Node.js CLI scripts, Sanofi Elements local tokens, business standards JSON, static HTML outputs, report JSON/Markdown.

---

### Task 1: Add Example Renderer

**Files:**
- Create: `design-system-plugin/scripts/render-business-page-examples`

**Goal:** Generate `business-query-form.resolved.html` and `business-entity-detail.resolved.html`.

**Success Criteria:**
- Query form page uses `entity-form` profile and includes query panel, form sections, validation summary, and sticky save bar.
- Detail page uses `entity-detail` profile and includes detail header, field groups, status history, related actions, and business-table fallback.
- Both pages use local tokens, brand asset, and business standard markers.

**Tests:**
- `node --check design-system-plugin/scripts/render-business-page-examples`
- `design-system-plugin/scripts/render-business-page-examples`

**Status:** Completed

### Task 2: Add Example Validator

**Files:**
- Create: `design-system-plugin/scripts/validate-business-page-examples`

**Goal:** Validate both generated pages against business standards and page profile expectations.

**Success Criteria:**
- Validator checks required page attributes, required sections, business-form/business-table contracts, data field metadata, interaction states, and forbidden Table/DataGrid primitive claims.
- Report writes to `design-system-plugin/outputs/reports/business-page-examples.report.json` and `.md`.

**Tests:**
- `node --check design-system-plugin/scripts/validate-business-page-examples`
- `design-system-plugin/scripts/validate-business-page-examples`

**Status:** Completed

### Task 3: Expose Commands

**Files:**
- Modify: `design-system-plugin/components.json`

**Goal:** Make the renderer and validator discoverable from the plugin command map.

**Success Criteria:**
- `render_business_page_examples` and `validate_business_page_examples` command paths point to executable scripts.

**Tests:**
- `design-system-plugin/scripts/validate-local-registry`

**Status:** Completed

### Task 4: Verify Outputs

**Files:**
- Generated: `design-system-plugin/outputs/html/business-query-form.resolved.html`
- Generated: `design-system-plugin/outputs/html/business-entity-detail.resolved.html`
- Generated: screenshot/report files under `design-system-plugin/outputs/reports/`
- Modify: `IMPLEMENTATION_PLAN.md`

**Goal:** Prove the examples are usable and do not break existing plugin gates.

**Success Criteria:**
- Example validator passes.
- Business standards, design interface, and local registry validators pass.
- Desktop geometry check shows no horizontal overflow at 1440 width.

**Tests:**
- `design-system-plugin/scripts/validate-business-page-examples`
- `design-system-plugin/scripts/validate-business-standards`
- `design-system-plugin/scripts/validate-design-md`
- `design-system-plugin/scripts/validate-local-registry`

**Status:** Completed

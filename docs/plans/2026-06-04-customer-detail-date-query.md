# Customer Detail Date Query Implementation Plan

**Goal:** Add a validated business test page for querying customer detail records by date.

**Architecture:** Add a new page profile, template, pattern, registry item, renderer output, and validator. Reuse the existing local atomic runtime and business page shell so the page stays in the same design-system delivery path as the other business examples.

**Tech Stack:** Node.js CommonJS scripts, JSON page contracts/templates, static HTML output, Sanofi Elements local tokens and local atomic runtime.

---

### Task 1: Page Contract

**Files:**
- Create: `design-system-plugin/design-system/page-profiles/customer-detail-date-query.profile.json`
- Create: `design-system-plugin/design-system/templates/customer-detail-date-query.template.json`
- Create: `design-system-plugin/design-system/patterns/customer-detail-date-query/customer-detail-date-query.pattern.json`
- Modify: `design-system-plugin/design-system/templates/template-index.json`
- Modify: `design-system-plugin/design-system/patterns/pattern-index.json`
- Modify: `design-system-plugin/design-system/reference-fit/business-page-family.rules.json`

**Steps:**
1. Add the page profile with required sections and module contracts.
2. Add the template with body attributes, section order, and output contract.
3. Add the pattern with required primitives, rules, and prompt keywords.
4. Register the template and pattern indexes.
5. Extend the business page family reference-fit rule with this page family.
6. Run JSON parsing and `validate-business-standards`.

### Task 2: Renderer Output

**Files:**
- Modify: `design-system-plugin/scripts/render-business-page-examples`
- Create through renderer: `design-system-plugin/outputs/html/customer-detail-date-query.resolved.html`

**Steps:**
1. Add a `customerDetailDateQueryPage()` renderer function.
2. Use the existing `shell()` and runtime helpers.
3. Render a date range DatePicker, five additional filters, summary cards, detail table fallback, actions, and pagination.
4. Add page-level output state markers.
5. Add the page to renderer outputs.
6. Run `render-business-page-examples`.

### Task 3: Validator

**Files:**
- Create: `design-system-plugin/scripts/validate-customer-detail-date-query-page`
- Modify: `design-system-plugin/scripts/validate-business-page-examples`
- Modify: `design-system-plugin/scripts/build-local-registry`

**Steps:**
1. Write a dedicated validator for required sections, DatePicker, Select runtime, summary, table fallback, pagination, and output states.
2. Add the page as the fourth target in `validate-business-page-examples`.
3. Add a registry block item and dependency files in `build-local-registry`.
4. Run syntax checks and validation.

### Task 4: Final Verification

**Files:**
- Output reports in `design-system-plugin/outputs/reports/`

**Steps:**
1. Run `build-local-registry`.
2. Run `validate-design-md`, `validate-business-standards`, and `validate-local-registry`.
3. Run `validate-business-page-examples`.
4. Run `validate-customer-detail-date-query-page`.
5. Run `validate-reference-fit` on the new page.
6. Run `validate-component-runtime` on the new page.
7. Run app shell scroll and typography validators.
8. Open the final HTML with local Chrome and save a smoke screenshot.

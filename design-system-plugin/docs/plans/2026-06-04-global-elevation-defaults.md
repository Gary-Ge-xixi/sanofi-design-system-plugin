# Global Elevation Defaults Implementation Plan

**Goal:** Make Sanofi Elements elevation tokens the global default for generated HTML shadows.

**Architecture:** Add an executable `elevation-usage` rule that maps UI roles to `--elements-core-elevation-*` tokens, update renderers to use those tokens, and add validators that fail raw `box-shadow` values in generated HTML. The rule is indexed through the same rule and business-standard registries as density, content, interaction state, and default admin behavior.

**Tech Stack:** Node.js validation scripts, local Sanofi Elements token CSS, local opencli-captured Storybook Markdown, static HTML renderers.

---

### Task 1: Add the Elevation Rule

**Files:**
- Create: `design-system-plugin/design-system/rules/elevation-usage.json`
- Modify: `design-system-plugin/design-system/rules/rules-index.json`
- Modify: `design-system-plugin/design-system/business/business-standards-index.json`
- Modify: `design-system-plugin/scripts/validate-business-standards`

**Steps:**
1. Define role-to-token mappings from `knowledge/docs/foundations-elevation--docs.md`.
2. Register the rule in `rules-index.json`.
3. Add the rule to business standards coverage and required rules.
4. Run `scripts/validate-business-standards` and expect it to include the new rule.

### Task 2: Add Executable Elevation Validation

**Files:**
- Create: `design-system-plugin/scripts/validate-elevation-usage`
- Modify: `design-system-plugin/scripts/validate-token-usage`
- Modify: `design-system-plugin/scripts/validate-business-page-examples`
- Modify: `design-system-plugin/components.json`
- Modify: `design-system-plugin/scripts/sanofi-ds`

**Steps:**
1. Add a validator that rejects raw `box-shadow` values unless they use Elements elevation tokens.
2. Extend token validation so hand-written shadows fail early.
3. Extend business-page validation to require elevation markers on layered UI.
4. Register the validator in CLI command metadata and render validation chain.

### Task 3: Update Generated HTML Defaults

**Files:**
- Modify: `design-system-plugin/scripts/render-business-page-examples`
- Modify: `design-system-plugin/scripts/render-template-html`

**Steps:**
1. Replace header raw shadows with `--elements-core-elevation-02`.
2. Replace sticky save bar raw shadows with `--elements-core-elevation-03`.
3. Add `data-elevation-role` and `data-elevation-token` markers to generated layered surfaces.

### Task 4: Update Documentation And Verify

**Files:**
- Modify: `design-system-plugin/design-system/DESIGN.md`
- Modify: `design-system-plugin/skills/design-prototype-generator/SKILL.md`
- Regenerate: `design-system-plugin/outputs/html/business-query-form.resolved.html`
- Regenerate: `design-system-plugin/outputs/html/business-entity-detail.resolved.html`
- Regenerate: `design-system-plugin/outputs/html/admin-query-panel.resolved.html`

**Steps:**
1. Document the rule, default role mapping, and validator command.
2. Update the generator skill so future pages inherit the same behavior.
3. Regenerate example HTML.
4. Run syntax checks, token validation, elevation validation, business standards, local registry checks, reference-fit checks, measurements, and screenshots.

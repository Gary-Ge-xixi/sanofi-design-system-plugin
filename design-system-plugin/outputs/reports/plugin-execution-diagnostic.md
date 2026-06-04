# Plugin Execution Diagnostic

## Done Criteria

This check is considered complete when the execution chain is traced from skill instructions to registry match, resolver output, renderer input, and validators. The goal is to identify whether the page drift came from missing source reads, incorrect resolution, hardcoded rendering, or weak validation.

## Verdict

The plugin is not failing because the skill text is missing. The skill file asks for the right workflow: registry first, then contracts, semantic tokens, layout rules, templates, resolver output, and validators.

The actual failure is in the executable chain:

1. `scripts/search-local-registry` only matches the request to the generic `sanofi-admin-dashboard` block.
2. `scripts/resolve-pattern` always resolves admin-like prompts to `admin-dashboard`, with a static section list.
3. `scripts/render-resolved-html` delegates to `scripts/render-admin-template-html`, and the active renderer hardcodes a OneCommercial-like HTML page instead of composing from the selected registry item, template, pattern, contracts, and rules.
4. Existing validators confirm marker presence, token syntax, primitive ids, and provenance attributes, but they do not verify that the renderer actually consumed the selected registry/template/rule/semantic map.

So the current page can pass validation while still being architecturally wrong.

## Evidence

### Skill Layer

File: `design-system-plugin/skills/design-prototype-generator/SKILL.md`

Status: mostly correct.

The skill requires loading:

- `components.json`
- `design-system/registry/registry.json`
- matched registry item
- component contracts
- `design-system/contracts/semantic-token-map.json`
- layout, typography, and admin navigation rules
- resolver output
- relevant docs
- primitive registry
- templates
- validators

Problem: these instructions are not enforced by the scripts.

### Registry Layer

File: `design-system-plugin/design-system/registry/items/sanofi-admin-dashboard.json`

Status: too generic.

The registry item only represents a generic admin dashboard. It does not distinguish:

- OneCommercial admin shell
- query panel
- CDC inventory fill page
- editable data-entry table page
- marketplace/card-heavy landing dashboard
- insight assistant layout

It also does not declare `icon` as a dependency, even though the screenshots and the current output require sidebar and navigation icons.

### Resolver Layer

File: `design-system-plugin/scripts/resolve-pattern`

Status: main execution problem.

Observed behavior:

- `intent`, `page_type`, and `pattern_id` always resolve to `admin-dashboard`.
- `requiredPrimitives` is a fixed object, not selected by prompt or registry.
- sections are always `admin-shell`, `layout-container`, `layout-grid`, `navigation`, `filter-toolbar`, `kpi-summary`, `work-queue`, `data-table-fallback`, and `chart-fallback`.
- the resolver does not read `pattern-index.json`, `template-index.json`, `rules-index.json`, `semantic-token-map.json`, knowledge docs, or atomic packages.

Result: a request like `OneCommercial CDC库存查询填报后台` is incorrectly treated as a generic dashboard with KPI/chart/work-queue sections.

### Resolver Output

File: `design-system-plugin/design-system/contracts/resolvers/latest-resolution.json`

Status: structurally valid but semantically wrong.

The output currently records:

- `intent: admin-dashboard`
- `page_type: admin-dashboard`
- `pattern_id: admin-dashboard`
- required primitives include `card`, `tag`, `tabs`, `progress-bar`
- no `icon`
- no template id
- no business subtype
- no OneCommercial shell
- no query-fill/data-entry mode

This explains why the output initially looked like a docs/dashboard composition instead of a real backend page.

### Renderer Layer

Files:

- `design-system-plugin/scripts/render-resolved-html`
- `design-system-plugin/scripts/render-admin-template-html`

Status: hardcoded renderer.

`render-resolved-html` immediately calls `render-admin-template-html`. The older renderer code below that call is effectively dead code.

The active renderer reads `latest-resolution.json`, but only uses it for metadata such as data attributes and report counts. It does not load:

- selected registry item
- selected template
- pattern schema
- component contracts
- semantic token map
- rules index
- source docs
- atomic component package contracts

Current HTML quality improved visually because `render-admin-template-html` was manually corrected, not because the plugin is reliably composing from the design-system knowledge base.

### Template Layer

File: `design-system-plugin/design-system/templates/template-index.json`

Status: missing useful templates.

Only `standalone-html` exists. There is no dedicated template for:

- `onecommercial-admin-shell`
- `admin-query-panel`
- `data-entry-table-page`
- `marketplace-dashboard`
- `insight-assistant-panel`

Also, the renderer does not consume `template-index.json`, so even the existing template layer is not really active.

### Validator Layer

Files:

- `scripts/validate-token-usage`
- `scripts/validate-primitive-usage`
- `scripts/validate-page-pattern`
- `scripts/validate-layout-rule-usage`
- `scripts/validate-typography-rule-usage`
- `scripts/validate-admin-template-navigation`
- `scripts/validate-provenance`

Status: validators are too shallow for this problem.

They catch:

- raw hex/rgb/px
- unknown `data-primitive`
- unknown `data-story-id`
- missing token stylesheet
- missing layout/typography/admin markers
- basic provenance attributes

They do not catch:

- resolver choosing the wrong page subtype
- renderer not reading the matched registry item
- renderer not reading template/rule/semantic-token-map files
- sidebar icon usage missing from resolver dependencies
- screenshots/template background mismatch
- docs navigation versus product sidebar navigation confusion
- generic dashboard sections appearing in a query/fill backend page

## Root Cause

The plugin currently has a correct written standard but an incomplete executable architecture.

The weakest points are:

1. Registry lacks backend subtype entries.
2. Resolver is static and prompt-insensitive.
3. Renderer is hardcoded and does not compose from registry/contracts/templates.
4. Validators validate output markers, not the execution path or semantic match.

## Required Fix Order

1. Add canonical registry items and patterns for backend subtypes:
   - `onecommercial-admin-shell`
   - `admin-query-panel`
   - `data-entry-table-page`
   - `admin-home-workbench`
   - `marketplace-dashboard`
2. Rewrite `resolve-pattern` so it reads registry, pattern index, template index, rules, semantic token map, and component contracts before producing resolution.
3. Add `template_id`, `business_context`, `page_subtype`, `visual_shell`, and `required_rules` to resolver output.
4. Rewrite renderer so it consumes `resolution.template_id` and component contracts instead of hardcoded HTML blocks.
5. Add validators for:
   - registry item consumed
   - template consumed
   - resolver subtype correctness
   - icon dependency completeness
   - admin visual shell rules
   - forbidden generic dashboard sections for query/fill pages

## Current Status

The latest HTML can pass existing validation, but that pass result should not be treated as architecture-compliant. It is a valid static HTML output, not yet a reliable plugin-driven design-system composition.

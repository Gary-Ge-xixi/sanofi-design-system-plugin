# Plugin Execution Chain Implementation Plan

**Goal:** Build the first reliable local execution chain for the OneCommercial CDC query/fill backend page.

**Architecture:** Add a precise registry block and pattern/template contract, then route `resolve-pattern` through those local contracts. `render-resolved-html` will consume the resolver-selected template instead of the raw prompt, and validators will check subtype/template provenance.

**Tech Stack:** Local Node.js CLI scripts, JSON contracts, static HTML/CSS with Sanofi Elements tokens.

---

### Task 1: Backend subtype contracts

**Files:**
- Create: `design-system-plugin/design-system/patterns/admin-query-panel/admin-query-panel.pattern.json`
- Create: `design-system-plugin/design-system/templates/onecommercial-admin-query-panel.template.json`
- Modify: `design-system-plugin/design-system/patterns/pattern-index.json`
- Modify: `design-system-plugin/design-system/templates/template-index.json`

**Checks:**
- Pattern id is `admin-query-panel`.
- Template id is `onecommercial-admin-query-panel`.
- Required primitives include `container`, `grid`, `navigation-header`, `sidebar`, `menu`, `icon`, `search-input`, `select`, `button`, `text-input`, and `pagination`.
- `card`, `tabs`, `progress-bar`, and `chart` are not required for this subtype.

### Task 2: Registry integration

**Files:**
- Modify: `design-system-plugin/scripts/build-local-registry`
- Modify: `design-system-plugin/scripts/validate-local-registry`
- Generated: `design-system-plugin/design-system/registry/items/sanofi-admin-query-panel.json`
- Generated: `design-system-plugin/design-system/registry/registry.json`

**Checks:**
- `scripts/search-local-registry "OneCommercial CDC库存查询填报后台"` returns `sanofi-admin-query-panel` as top hit.
- `scripts/validate-local-registry` passes.

### Task 3: Resolver runtime

**Files:**
- Create: `design-system-plugin/scripts/resolve-pattern-runtime`
- Modify: `design-system-plugin/scripts/resolve-pattern`
- Modify: `design-system-plugin/design-system/contracts/schemas/pattern-resolver.schema.json`

**Checks:**
- `latest-resolution.json` includes `registry_item`, `template_id`, `page_subtype`, `business_context`, `required_rules`, and `execution_inputs`.
- OneCommercial CDC query/fill prompt resolves to `admin-query-panel`.
- Generic dashboard prompts still resolve to `admin-dashboard`.

### Task 4: Renderer runtime

**Files:**
- Create: `design-system-plugin/scripts/render-template-html`
- Modify: `design-system-plugin/scripts/render-resolved-html`

**Checks:**
- Renderer reads `resolution.source_provenance.template_path`.
- Generated HTML includes `data-registry-item`, `data-template-id`, `data-page-subtype`, and existing provenance markers.
- Output uses token vars only and keeps Sanofi Sans / Noto Sans SC.

### Task 5: Execution validation and preview

**Files:**
- Create: `design-system-plugin/scripts/validate-admin-query-panel-template`
- Modify: `design-system-plugin/scripts/validate-pattern-resolver`
- Modify: `design-system-plugin/design-system/rules/rules-index.json`

**Checks:**
- Query/fill subtype fails if resolution is generic dashboard.
- Query/fill subtype fails if `template_id` or `registry_item` is missing.
- Rendered HTML passes token, primitive, page-pattern, layout, typography, admin navigation, provenance, and admin-query-panel validators.

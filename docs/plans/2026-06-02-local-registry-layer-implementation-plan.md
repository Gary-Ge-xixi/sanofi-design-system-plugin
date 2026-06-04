# Local Registry Layer Implementation Plan

**Goal:** Build a local shadcn-like registry layer for the Sanofi Elements design-system plugin.

**Architecture:** Add a deterministic registry builder and validator on top of the existing local knowledge base. The registry points to existing Markdown docs, component contracts, semantic token map, patterns, policies, templates, scripts, and outputs; it does not replace the resolver or validators.

**Tech Stack:** Node.js scripts, JSON registry files, local Markdown docs, existing Sanofi Elements HTML renderer and validators.

---

### Task 1: Add Consumer Configuration

**Files:**
- Create: `design-system-plugin/components.json`

**Steps:**
1. Define the local registry URL as a file path.
2. Define renderer target as `html`.
3. Define output aliases for HTML, reports, tokens, registry, contracts, patterns, and rules.
4. Define source priority as local registry, local contracts, local MD, then remote source URLs.

**Tests:**
- `scripts/validate-local-registry` confirms the config exists and references real paths.

### Task 2: Add Registry Builder

**Files:**
- Create: `design-system-plugin/scripts/build-local-registry`
- Generated: `design-system-plugin/design-system/registry/registry.json`
- Generated: `design-system-plugin/design-system/registry/items/*.json`

**Steps:**
1. Read `source-index.json`, `component-contract-index.json`, `semantic-token-map.json`, `pattern-index.json`, `primitive-index.json`, and policies.
2. Create registry items for tokens, workflow, admin dashboard block, and primitive-backed components.
3. Write item files and top-level registry index.

**Tests:**
- Run `design-system-plugin/scripts/build-local-registry`.
- Confirm registry contains style, lib, block, and component items.

### Task 3: Add Registry Validator

**Files:**
- Create: `design-system-plugin/scripts/validate-local-registry`
- Generated: `design-system-plugin/outputs/reports/local-registry-validation.report.json`

**Steps:**
1. Validate `components.json`.
2. Validate every item id is unique.
3. Validate dependency ids exist.
4. Validate every local source path exists.
5. Validate `admin-dashboard` block declares HTML renderer, pattern resolver, required primitives, fallback policy, and provenance.

**Tests:**
- Run `design-system-plugin/scripts/validate-local-registry`.
- Expected: `status: "pass"`.

### Task 4: Wire Registry Into Skill And Rules

**Files:**
- Modify: `design-system-plugin/skills/design-prototype-generator/SKILL.md`
- Modify: `design-system-plugin/design-system/rules/rules-index.json`

**Steps:**
1. Add registry-first workflow to the skill.
2. Add `build-local-registry` and `validate-local-registry` to required validation scripts.
3. Add registry validation to `rules-index.json`.

**Tests:**
- Run the registry builder and validator.
- Run existing validators for docs, contracts, semantic tokens, resolver, source index, tokens, primitives, page pattern, provenance, and benchmark.

### Task 5: Update Top-Level Progress Plan

**Files:**
- Modify: `IMPLEMENTATION_PLAN.md`

**Steps:**
1. Add Stage 15 for local registry layer.
2. Mark it complete only after registry generation and validation pass.

**Tests:**
- Verify the plan accurately reflects the completed work.

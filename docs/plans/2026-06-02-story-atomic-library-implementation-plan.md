# Story Atomic Library Implementation Plan

**Goal:** Create a first-version local story atomic library from Sanofi Elements Storybook, starting with `components-button--primary`.

**Architecture:** Add deterministic scripts that materialize story-level facts from Storybook index and story bundle assets into local atomic JSON records. The atomic records are indexed, validated, registered, and rendered through HTML templates so generation can call a known story atom instead of inferring component markup from docs.

**Tech Stack:** Node.js scripts, JSON atomic records, local Storybook bundle assets, HTML templates, existing token and provenance validators.

---

### Task 1: Add Atomic Schemas And Plan Stage

**Files:**
- Create: `design-system-plugin/design-system/atomic/schemas/atomic-story.schema.json`
- Modify: `IMPLEMENTATION_PLAN.md`

**Steps:**
1. Define required atomic story fields.
2. Add Stage 16 to the top-level implementation plan.
3. Mark Stage 16 as in progress before implementation.

**Tests:**
- Parse schema JSON with Node.
- Confirm Stage 16 exists.

### Task 2: Materialize Button Primary Story Atom

**Files:**
- Create: `design-system-plugin/scripts/materialize-story-atom`
- Generated: `design-system-plugin/design-system/atomic/components/button/stories/components-button--primary.story.json`
- Generated: `design-system-plugin/design-system/atomic/components/button/assets/Button.stories-CGg2KCkY.js`
- Generated: `design-system-plugin/design-system/atomic/components/button/component.atomic.json`

**Steps:**
1. Read `research/storybook/index.json`.
2. Resolve story metadata for `components-button--primary`.
3. Fetch or reuse the Storybook story bundle.
4. Extract `args`, `argTypes`, `docs.source.originalSource`, variant hints, and provenance.
5. Write component and story atomic records.

**Tests:**
- Run `design-system-plugin/scripts/materialize-story-atom components-button--primary`.
- Confirm story JSON exists and includes `args.variant = "primary"`.

### Task 3: Build And Validate Atomic Index

**Files:**
- Create: `design-system-plugin/scripts/build-atomic-library`
- Create: `design-system-plugin/scripts/validate-atomic-library`
- Generated: `design-system-plugin/design-system/atomic/atomic-component-index.json`
- Generated: `design-system-plugin/outputs/reports/atomic-library-validation.report.json`

**Steps:**
1. Scan all `*.story.json` records.
2. Build component and story indexes.
3. Validate source paths, bundle paths, docs id, contract path, template path, args, and provenance.

**Tests:**
- Run `build-atomic-library`.
- Run `validate-atomic-library`.
- Expected: pass with one Button story.

### Task 4: Render From Atomic Story

**Files:**
- Create: `design-system-plugin/design-system/atomic/components/button/templates/html.primary.template.html`
- Create: `design-system-plugin/scripts/render-atomic-html`
- Generated: `design-system-plugin/outputs/html/button-primary.atomic.html`

**Steps:**
1. Create a token-based HTML template for Button Primary.
2. Render from the atomic story record.
3. Preserve `data-primitive`, `data-story-id`, `data-source-doc-id`, `data-atomic-story-id`, and `data-token-source`.

**Tests:**
- Run `render-atomic-html components-button--primary`.
- Run token, primitive, page-pattern, and provenance validators where applicable.

### Task 5: Wire Atomic Library Into Registry And Skill

**Files:**
- Modify: `design-system-plugin/scripts/build-local-registry`
- Modify: `design-system-plugin/scripts/validate-local-registry`
- Modify: `design-system-plugin/skills/design-prototype-generator/SKILL.md`
- Modify: `design-system-plugin/design-system/rules/rules-index.json`
- Modify: `design-system-plugin/scripts/build-knowledge-base`

**Steps:**
1. Add atomic story item to local registry.
2. Add atomic validators to rules index and skill workflow.
3. Add atomic library counts to source index.

**Tests:**
- Run registry build and validation.
- Run knowledge build and source-index validation.
- Run existing full validation gates.

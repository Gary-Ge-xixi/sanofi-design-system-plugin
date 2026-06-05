# Button Complete Standard Package Implementation Plan

**Goal:** Build a complete local Button standard package that covers `Docs` plus every Button Storybook tab as callable atoms, package metadata, rendered reference outputs, registry entries, and validators.

**Architecture:** Keep the current local-first Storybook atomic pipeline, but promote Button from two materialized stories into a complete component package. Individual Storybook tabs become `story atoms`; the docs tab becomes a `docs contract`; `button.package.json` becomes the resolver entrypoint for AI generation; package validators enforce coverage, provenance, token usage, primitive usage, and story-specific semantics.

**Tech Stack:** Node.js scripts, JSON contracts, local Storybook `index.json`, local Storybook bundle assets, Sanofi token CSS, standalone HTML renderer, existing registry and validation scripts.

---

## Done Definition

The complete Button package is done only when all of these are true:

- `components-button--docs` is represented as a local Button docs contract with API, props, examples, usage guidance, accessibility notes, and source provenance.
- All 13 Button stories are materialized as local story atoms:
  - `components-button--primary`
  - `components-button--primary-neutral`
  - `components-button--overview`
  - `components-button--overview-inverse`
  - `components-button--default`
  - `components-button--secondary`
  - `components-button--secondary-neutral`
  - `components-button--tertiary`
  - `components-button--tertiary-neutral`
  - `components-button--primary-destruct`
  - `components-button--secondary-destruct`
  - `components-button--tertiary-destruct`
  - `components-button--button-link`
- `button.package.json` exists as the complete package index and points to docs, stories, templates, outputs, token bindings, primitive contract, component contract, and source files.
- `Button Link` is treated as anchor/link semantics, not as an ordinary action button.
- `Overview` and `Overview Inverse` are treated as matrix stories, not simple variant samples.
- Every rendered HTML sample has `data-primitive`, `data-story-id`, `data-source-doc-id`, `data-variant`, `data-size`, `data-state`, and `data-token-source` where applicable.
- Registry search for Button can resolve:
  - the complete Button package,
  - the Button primitive,
  - each individual Button story atom.
- Validators fail if any docs tab/story tab from Storybook is missing, any story lacks provenance, any Button Link sample lacks anchor semantics, or any generated HTML uses raw colors, direct core color refs, raw px, or unknown primitives/stories.

## Stage 1: Define Package Schema And Coverage Gate

**Goal:** Establish the complete Button package standard before generating more files.

**Files:**
- Create: `design-system-plugin/design-system/atomic/schemas/atomic-component-package.schema.json`
- Create: `design-system-plugin/design-system/atomic/components/button/button.expected-tabs.json`
- Modify: `design-system-plugin/scripts/validate-atomic-library`
- Modify: `design-system-plugin/scripts/build-atomic-library`

**Success Criteria:**
- The package schema requires docs, story coverage, package-level provenance, render outputs, token bindings, story semantics, and validator expectations.
- `button.expected-tabs.json` lists exactly 1 docs tab and 13 story tabs from `research/storybook/index.json`.
- `validate-atomic-library` reports failure when any expected Button tab is not materialized or not covered by the package.

**Tests:**
- Run: `node design-system-plugin/scripts/validate-atomic-library`
- Expected before implementation: fail with missing Button tabs.
- Expected after Stage 2 and Stage 3: pass with complete coverage.

## Stage 2: Materialize All Button Story Atoms

**Goal:** Convert every Button Storybook story tab into a local callable story atom.

**Files:**
- Modify: `design-system-plugin/scripts/materialize-story-atom`
- Generate: `design-system-plugin/design-system/atomic/components/button/stories/*.story.json`
- Generate: `design-system-plugin/design-system/atomic/components/button/assets/*.iframe.html`

**Story IDs:**
- `components-button--primary`
- `components-button--primary-neutral`
- `components-button--overview`
- `components-button--overview-inverse`
- `components-button--default`
- `components-button--secondary`
- `components-button--secondary-neutral`
- `components-button--tertiary`
- `components-button--tertiary-neutral`
- `components-button--primary-destruct`
- `components-button--secondary-destruct`
- `components-button--tertiary-destruct`
- `components-button--button-link`

**Success Criteria:**
- 13 story atom JSON files exist.
- Each story atom has Storybook id, export name, story URL, iframe URL, raw bundle path, local iframe path, args, argTypes, render strategy, template path, output path, component contract path, primitive path, token source, and source provenance.
- Existing `Primary` and `Secondary Neutral` atoms are preserved and not overwritten.

**Tests:**
- Run each materializer command or add a batch command:
  - `node design-system-plugin/scripts/materialize-story-atom components-button--primary-neutral`
  - repeat for every missing story id.
- Run: `node design-system-plugin/scripts/build-atomic-library`
- Expected: Button package records 13/13 stories materialized.

## Stage 3: Build Button Docs Contract

**Goal:** Convert the Button docs tab into a package-level docs contract that AI can use before selecting a story atom.

**Files:**
- Create: `design-system-plugin/design-system/atomic/components/button/docs/button.docs.contract.json`
- Modify: `design-system-plugin/scripts/build-atomic-library`
- Read source: `design-system-plugin/design-system/knowledge/docs/components-button--docs.md`
- Read source: `research/storybook/index.json`
- Read source: `research/storybook/assets/iframe-DU6-gHk6.js`

**Success Criteria:**
- Docs contract includes:
  - component purpose,
  - API props,
  - default values,
  - variant descriptions,
  - size descriptions,
  - icon and iconPosition guidance,
  - inverse / fullWidth / disabled / isLoading behavior,
  - link semantics for `as="a"`, `href`, `target`,
  - accessibility notes,
  - usage snippets,
  - source provenance.
- Unknown or not reliably extracted fields are explicitly marked `not_extracted`, never invented.

**Tests:**
- Add validator checks in `validate-atomic-library`.
- Expected: docs contract exists and includes at least `variant`, `size`, `label`, `icon`, `iconPosition`, `inverse`, `fullWidth`, `isLoading`, `as`, `href`, `target`, `brandTheme`.

## Stage 4: Render Complete Package Outputs

**Goal:** Produce both per-story outputs and one complete Button package overview page.

**Files:**
- Modify: `design-system-plugin/scripts/render-atomic-html`
- Create: `design-system-plugin/design-system/atomic/components/button/templates/html.button-package.template.html`
- Generate: `design-system-plugin/outputs/html/button-complete.atomic.html`
- Generate/update per-story outputs under: `design-system-plugin/outputs/html/`

**Success Criteria:**
- `button-complete.atomic.html` shows:
  - Docs summary and API table,
  - all 13 Storybook tabs,
  - variant matrix,
  - size matrix,
  - state matrix,
  - icon/anatomy slots,
  - inverse matrix,
  - destructive variants,
  - Button Link anchor usage,
  - token binding table,
  - source provenance table.
- Per-story outputs exist for each materialized story.
- `Button Link` output uses anchor markup when rendering navigation/link examples.
- `Overview` and `Overview Inverse` outputs preserve matrix semantics.

**Tests:**
- Run:
  - `node design-system-plugin/scripts/render-atomic-html components-button--button-link`
  - `node design-system-plugin/scripts/render-button-package`
  - or equivalent package render command added in this stage.
- Run validators against `button-complete.atomic.html`:
  - `node design-system-plugin/scripts/validate-token-usage design-system-plugin/outputs/html/button-complete.atomic.html`
  - `node design-system-plugin/scripts/validate-primitive-usage design-system-plugin/outputs/html/button-complete.atomic.html`
  - `node design-system-plugin/scripts/validate-page-pattern design-system-plugin/outputs/html/button-complete.atomic.html`

## Stage 5: Registry, Skill, And Benchmark Integration

**Goal:** Make the complete Button package discoverable and enforce it in generation workflows.

**Files:**
- Modify: `design-system-plugin/scripts/build-local-registry`
- Modify: `design-system-plugin/scripts/validate-local-registry`
- Modify: `design-system-plugin/skills/design-prototype-generator/SKILL.md`
- Modify: `design-system-plugin/design-system/registry/registry.json`
- Generate: `design-system-plugin/design-system/registry/items/sanofi-button-complete-package.json`
- Generate: registry item files for every Button story atom.

**Success Criteria:**
- Registry contains:
  - `sanofi-button-complete-package`,
  - `sanofi-button`,
  - 13 `registry:story` Button items.
- `search-local-registry "button link"` returns the Button Link story item before generic Button.
- `search-local-registry "primary neutral button"` returns the matching story atom.
- Skill instructions tell the AI to resolve Button through the complete package first, then select exact story atom by intent.

**Tests:**
- Run:
  - `node design-system-plugin/scripts/build-local-registry`
  - `node design-system-plugin/scripts/validate-local-registry`
  - `node design-system-plugin/scripts/search-local-registry "button link"`
  - `node design-system-plugin/scripts/search-local-registry "primary neutral button"`
  - `node design-system-plugin/scripts/validate-evaluation-benchmark`
  - `node design-system-plugin/scripts/run-evaluation-benchmark`
- Expected: registry validation passes, search hits exact Button atoms, benchmark remains `10/10`.

## Stage 6: Visual And Report Evidence

**Goal:** Produce reviewable evidence that the complete package behaves as expected.

**Files:**
- Generate: `design-system-plugin/outputs/reports/button-complete-package.report.json`
- Generate: `design-system-plugin/outputs/reports/button-complete.atomic.png`

**Success Criteria:**
- Report records:
  - expected tabs: 14,
  - docs coverage: 1/1,
  - story coverage: 13/13,
  - registry story items: 13,
  - token validation: pass,
  - primitive validation: pass,
  - page-pattern validation: pass,
  - package validation: pass.
- Screenshot confirms:
  - no black unintended page background,
  - no edge-stuck controls,
  - all sections have readable spacing,
  - Button Link and inverse sections are visible.

**Tests:**
- Use local Chrome/Playwright if available:
  - open `file://<repo-root>/design-system-plugin/outputs/html/button-complete.atomic.html`
  - capture screenshot to `outputs/reports/button-complete.atomic.png`
  - count rendered story sections and button/link samples from DOM.

## Execution Notes

- Do not delete existing Primary or Secondary Neutral outputs.
- Do not treat raw Storybook screenshots as source of truth; source of truth is local Storybook index, docs MD, story bundle, component contract, primitive contract, and token CSS.
- Do not claim exact official CSS values unless extracted from source. Mark uncertain values as `not_extracted` or `token_guided`.
- The directory is not currently a git repository, so commit steps are replaced by validation reports and file evidence.

## Implementation Status

Status: Complete with one evidence limitation.

Completed:
- `components-button--docs` is represented by `button.docs.contract.json`.
- All 13 Button stories are materialized as story atoms.
- `button.package.json` indexes docs, story atoms, token bindings, primitive/component contracts, outputs, registry entrypoints, validation gates, and source provenance.
- `button-complete.atomic.html` renders the complete Button package.
- `validate-button-package-dom` was added as a package-specific HTML structure gate.
- Registry search resolves exact Button variants and the complete Button package.
- Atomic, token, primitive, page-pattern, Button DOM, registry, source-index, resolver, component-contract, semantic-token, and benchmark validations pass.

Evidence limitation:
- `button-complete.atomic.png` was not generated because the in-app browser blocks direct `file://` navigation. Structural DOM evidence is recorded in `design-system-plugin/outputs/reports/button-complete-dom-validation.report.json`.

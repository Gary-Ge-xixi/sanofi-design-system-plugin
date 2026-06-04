# DESIGN.md Dependency Impact

## Summary

`DESIGN.md` is now the AI-readable entrypoint for Sanofi Elements HTML generation. The project already had the raw assets: token CSS, token allowlist, component contracts, atomic component packages, registry items, patterns, templates, and validators. This update adds the consolidated design-system interface and wires it into config, registry, resolver, renderer, and validation.

## What Was Added

| File | Purpose |
| --- | --- |
| `design-system/DESIGN.md` | First Sanofi Elements AI-readable design-system interface for HTML generation. |
| `design-system/knowledge/docs/foundations-motion--docs.md` | Token-only local Motion foundation until authenticated Zeroheight capture is available. |
| `scripts/validate-design-md` | Validator for DESIGN.md token references, required components, foundation docs, and dependency markers. |
| `design-system/rules/admin-density.json` | Executable compact density rule for admin data-entry pages. |
| `design-system/contracts/page-modules/data-table-fallback.contract.json` | Explicit fallback contract for table/list outputs while no official Table primitive is registered. |
| `design-system/reference-fit/admin-data-entry-table.rules.json` | Static visual-fit contract for OneCommercial-style admin query/list pages. |
| `outputs/screenshots/admin-query-panel-desktop-1440.png` | Desktop screenshot gate. |
| `outputs/screenshots/admin-query-panel-mobile-390.png` | Mobile screenshot gate. |

## Important Finding

Motion foundation was not missing from tokens. Motion tokens already exist in:

- `design-system/tokens/tokens.css`
- `design-system/tokens/token-allowlist.txt`
- `design-system/tokens/token-manifest.generated.json`

The local `knowledge/docs/foundations-motion--docs.md` now exists, but it is intentionally token-only. The external Zeroheight Motion page could not be extracted through Defuddle, and the page source indicates password or SSO protection. This means Motion is now沉淀 into the AI-readable foundation layer without inventing unauthenticated guidance.

## Dependency Status

| Dependency | Status | Why |
| --- | --- | --- |
| `components.json` | Done | `design_md`, `page_modules`, `reference_fit`, and new commands are registered. |
| `skills/design-prototype-generator/SKILL.md` | Done | Workflow now requires loading `DESIGN.md` before registry and component decisions. |
| `design-system/registry/items/sanofi-design-prototype-generator.json` | Done | Rebuilt registry item includes `DESIGN.md` as `design-md`. |
| `scripts/build-local-registry` | Done | Rebuild preserves DESIGN.md, Motion docs, page profile, density, reference-fit, and module contracts. |
| `scripts/validate-local-registry` | Done | Validates DESIGN.md and admin query/list dependency declarations. |
| `scripts/validate-design-md` | Done | Checks tokens, required components, foundation docs, and dependency markers. |
| `design-system/knowledge/docs/foundations-motion--docs.md` | Token-only done | Authenticated Zeroheight capture is still the only remaining external dependency. |
| `design-system/tokens/tokens.css` vs `foundations-layout--docs.md` | Mitigated | `DESIGN.md` cites executable spacing tokens only; the `--elements-spacing-xs` upstream/local mismatch remains documented. |
| `design-system/rules/admin-density.json` | Done | Renderer consumes density variables from this rule. |
| `design-system/contracts/page-modules/data-table-fallback.contract.json` | Done | Renderer and validators consume this fallback contract. |
| `scripts/render-template-html` | Done | Reads density and table fallback inputs, emits provenance, and fixes mobile overflow. |
| Screenshot gate | Done for this output | Desktop 1440 and mobile 390 screenshots generated and checked. |

## Practical Interpretation

`DESIGN.md` is not a report. It should be the first AI-consumed design-system interface.

The optimal stack becomes:

```text
DESIGN.md
  -> tokens.css
  -> local registry
  -> component contracts / atomic packages
  -> page profiles / templates
  -> renderer
  -> developer HTML
  -> validators and screenshots
```

This fixes the previous local-optimum problem where the system had many correct JSON assets, but no single AI-readable design brain.

# Local Registry Layer Design

## Goal

Turn the current Sanofi Elements local knowledge base into a shadcn-like private registry layer so AI can resolve reusable design-system items from local Markdown, contracts, tokens, patterns, and validators instead of repeatedly reading remote web pages.

## Chosen Approach

Use a file-based registry inside `design-system-plugin/design-system/registry/`.

- `registry.json` is the top-level index for AI and scripts.
- `items/*.json` are installable or reusable registry items.
- `components.json` at the plugin root is the consumer configuration, similar to shadcn's project config role.
- `scripts/build-local-registry` generates registry files from the existing local docs, contracts, token map, pattern index, and policy files.
- `scripts/validate-local-registry` validates source paths, item dependencies, provenance, and renderer target compatibility.

This keeps the current `contract -> resolver -> renderer -> validator` execution layer, while adding a registry lookup layer above it.

## Registry Item Types

First version item types:

- `registry:style` for Sanofi Elements tokens and semantic token map.
- `registry:lib` for skill workflow, policies, validators, and source index.
- `registry:block` for generated page patterns such as `admin-dashboard`.
- `registry:component` for local primitive-backed components.

The registry does not claim unsupported official components. Table, chart, metric-card, page-header, modal, drawer, and date-picker remain explicit fallbacks or gaps until primitive contracts are complete.

## Data Flow

1. User prompt enters `design-prototype-generator`.
2. Skill loads `design-system/registry/registry.json` first.
3. Registry maps the prompt to item candidates such as `sanofi-admin-dashboard`.
4. The item declares `registryDependencies`, required docs, contracts, tokens, patterns, and validators.
5. Resolver consumes the item contract and creates a structured resolution report.
6. HTML renderer consumes the resolution report.
7. Validators check token use, primitive use, provenance, page pattern, benchmark, and registry integrity.

## Success Criteria

- A local registry index exists and is generated from current local sources.
- `admin-dashboard` is available as a registry block.
- Core primitives are available as registry components.
- Tokens and skill workflow are available as registry items.
- Every registry item can trace back to local MD, contracts, token source, or policy files.
- Registry validation passes without remote access.

## Constraints

- First version supports HTML only.
- The registry is local and private; it does not publish to npm or a public registry.
- No web scraping is required for normal generation.
- Remote GitHub or Storybook updates are handled by replacing source links and rebuilding local docs/contracts, not by changing generation prompts.

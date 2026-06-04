# Design System Plugin First Version

## Goal

Create a local Codex plugin package that converts captured Sanofi Elements design-system research into validated static HTML prototypes.

## Chosen Approach

Use a file-based package first:

- Tokens are stored as CSS and allowlist files.
- Primitives are stored as component-specific JSON contracts.
- Patterns describe composition rules.
- Templates define page shells.
- Rules define validation expectations.
- Scripts perform deterministic local checks.

This is intentionally smaller than a full npm package. It lets the skill generate and validate prototypes before all components are fully captured.

## First-Version Scope

- Plugin manifest and skill entrypoint.
- Tokens copied from the current Elements Storybook extraction.
- Checkbox as the first complete primitive.
- Checkbox group form pattern.
- Standalone HTML template.
- Token, primitive, and page-pattern validation rules.
- One generated Checkbox prototype.

## Out of Scope

- Marketplace installation.
- Full official npm token extraction.
- Batch capture for all 23 demo-enabled components.
- React component generation.
- Pixel-perfect reproduction of Storybook CSS modules.

## Acceptance Criteria

- Plugin validates with the local plugin validator.
- Skill validates with the local skill validator.
- Token transform script generates a report.
- Token usage, primitive usage, and page-pattern validators pass on the Checkbox HTML output.

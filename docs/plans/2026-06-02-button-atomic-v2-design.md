# Button Atomic V2 Design

**Goal:** Upgrade Sanofi Elements Button atomic output from a single Storybook story snapshot into a callable local atomic component contract.

## Done Criteria

- `components-button--secondary-neutral` is materialized locally with Storybook metadata, story args, argTypes, iframe, raw bundle, provenance, and a renderer output.
- `button/component.atomic.json` contains a V2 atomic contract with variant, size, state, spacing, color-token, anatomy, accessibility, and provenance sections.
- The HTML output is a reference sheet, not a single demo: it must show Button kinds, sizes, states, icon positions, and token bindings.
- The output uses registered tokens only, includes `data-primitive`, `data-story-id`, `data-source-doc-id`, `data-variant`, `data-size`, and `data-state`, and passes validators.
- Existing Primary pilot and admin dashboard validations must keep passing.

## Architecture

The existing atomic pipeline stays in place:

1. `materialize-story-atom` captures an individual Storybook story.
2. `build-atomic-library` builds a local atomic index and component-level metadata.
3. `render-atomic-html` renders a story-driven HTML output.
4. Validators confirm token, primitive, page-pattern, registry, and provenance integrity.

V2 adds a component-level contract for Button. Story records remain the source atoms, while `component.atomic.json` becomes the AI-callable contract that describes the full Button matrix.

## Button V2 Contract Dimensions

- `component_identity`: canonical id, display name, renderer target.
- `source_provenance`: docs id, story ids, Storybook index, story bundle, token source.
- `api_arg_types`: Storybook argTypes and extracted default args.
- `variant_matrix`: primary, primary-neutral, primary-destruct, secondary, secondary-neutral, secondary-destruct, tertiary, tertiary-neutral, tertiary-destruct.
- `size_matrix`: xsmall, small, medium, large, with layout tokens and explicit extraction confidence.
- `state_matrix`: default, hover, active, focus, disabled, loading.
- `spacing_model`: row/column gaps from Storybook layout plus button padding/height guidance.
- `color_token_bindings`: component button background tokens where available, semantic token fallbacks where not available.
- `anatomy_slots`: root, label, start icon, end icon, loader.
- `accessibility_rules`: button semantics, disabled behavior, focus-visible behavior, loading label guidance.
- `render_templates`: HTML reference sheet only for V1 renderer target.
- `validation_rules`: no raw colors, no direct core colors, no unregistered primitives/stories.

## Source Evidence

- Storybook story id: `components-button--secondary-neutral`
- Storybook docs id: `components-button--docs`
- Storybook source URL: `https://elements.prod.accelerator.sanofi/?path=/story/components-button--secondary-neutral`
- Local story bundle: `design-system-plugin/design-system/atomic/components/button/assets/Button.stories-CGg2KCkY.js`
- Token source: `design-system-plugin/design-system/tokens/tokens.css`

## Scope Boundaries

- Renderer target remains HTML only.
- React/Figma/v0 output is not included in this stage.
- Exact production CSS class extraction is not forced in this stage. If a dimension is present in Storybook but exact CSS value is not reliably extractable, it must be marked as `not_extracted` or `token_guided`, not invented as official.
- Component-specific tokens are preferred over semantic tokens when the official token file exposes them.

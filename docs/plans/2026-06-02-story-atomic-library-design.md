# Story Atomic Library Design

## Goal

Build a local atomic component library from Sanofi Elements Storybook stories so prototype generation can directly call local story atoms and templates instead of reading documentation and guessing.

## Chosen Approach

Use Storybook story bundles as the primary story-level source.

- `research/storybook/index.json` and `stories.json` identify story ids, titles, import paths, component paths, and export names.
- Storybook `iframe.html?id=<story-id>&viewMode=story` identifies the runtime context.
- Story bundle assets such as `Button.stories-CGg2KCkY.js` contain story args, argTypes, render strategy, and docs source snippets.
- Local atomic records store the extracted story facts plus raw bundle provenance.

The first implementation is a Button Primary pilot. It creates a repeatable pipeline that can later scale across 429 stories.

## Atomic Library Structure

```text
design-system/atomic/
  atomic-component-index.json
  schemas/
    atomic-story.schema.json
  components/
    button/
      component.atomic.json
      stories/
        components-button--primary.story.json
      templates/
        html.primary.template.html
      assets/
        Button.stories-CGg2KCkY.js
```

## Data Flow

1. `materialize-story-atom components-button--primary` locates the story in the Storybook index.
2. The script resolves iframe and story bundle URLs.
3. The script stores the raw story bundle locally.
4. The script extracts args, argTypes, docs source, story metadata, variant/state hints, and provenance.
5. `build-atomic-library` indexes atomic records by component, story id, variant, and registry item.
6. `validate-atomic-library` checks local paths, source provenance, Storybook id consistency, and required extracted fields.
7. `render-atomic-html components-button--primary` renders a local HTML prototype from the atomic story template.
8. Existing token and provenance validators continue to guard output drift.

## Success Criteria

- `components-button--primary` has a local atomic story JSON file.
- The raw Storybook story bundle is saved locally.
- The story atom includes args, argTypes, original docs source, iframe URL, bundle URL, docs id, contract path, template path, and provenance.
- The atomic index can find Button Primary by story id and component.
- A local HTML prototype can be rendered from the atomic story.
- Atomic validation passes without reading remote pages at generation time.

## Scope

First version:

- Button Primary only.
- HTML renderer only.
- Template-based output, not React execution.
- Raw story bundle preservation plus deterministic extraction.

Out of scope:

- Executing React story render functions.
- Full DOM snapshot comparison for all breakpoints.
- Batch materialization of all 429 stories.
- Figma layer generation.

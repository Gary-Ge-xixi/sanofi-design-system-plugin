# Demo Capture Strategy

## Answer

Yes. Component Demo content can be沉淀下来, but it should be captured as a two-source package:

- Zeroheight page capture: page URL, component uid, demo tab block id, and iframe embedding context.
- Storybook capture: story ids, story names, args, rendered HTML snapshots, source snippets, component CSS chunks, and docgen props.

This is more reliable than relying on the Zeroheight page body alone, because Demo tabs are mainly Storybook embeds.

## Checkbox Pilot Result

The Checkbox demo page was accessible and saved locally:

- `research/raw/html/checkbox-demo-current/checkbox.html`
- `research/raw/html/checkbox-demo-current/checkbox_files/iframe.html`
- `research/raw/html/checkbox-demo-current/checkbox_files/iframe(1).html`

The saved iframes expose rendered examples:

- `components-checkbox--default`
- `components-checkbox-checkboxgroup--vertical`

The Storybook chunks were downloaded:

- `research/storybook/components/checkbox/Checkbox.stories-sP0G76Lf.js`
- `research/storybook/components/checkbox/CheckboxGroup.stories-DrXQ9HGt.js`
- `research/storybook/components/checkbox/Checkbox-DhaBB2L5.js`
- `research/storybook/components/checkbox/CheckboxGroup-DwTbtWW0.js`

The normalized registry is:

- `research/components/checkbox.demo.registry.json`

## Current Component Demo Coverage

From the component catalog, 23 of 37 component pages have a visible Demo tab.

Examples include:

- Accordion
- Breadcrumb
- Button
- Card
- Checkbox
- Divider
- Footer
- Hero Section
- Link
- Loading Spinner
- Menu
- Navigation Header
- Pagination
- Radio Button
- Search Input
- Select
- Tabs
- Text Area
- Text Input
- Tooltip
- Video Thumbnail

## Recommended Package Shape

Each component package should store:

- `component.registry.json`: page metadata, tabs, documentation coverage, anatomy coverage.
- `demo.registry.json`: stories, args, rendered snapshots, CSS/chunk references, source status.
- `tokens.css`: imported from the shared Elements token source.
- `validation.json`: required semantic checks, token allowlist checks, accessibility checks.

For HTML prototype generation, the skill should read `demo.registry.json` first when the user asks for an interactive component example, then use `component.registry.json` for documentation rules and `tokens.css` for visual constraints.

## Batch Capture Workflow

1. Read `component-catalog.json` and select pages with a Demo tab.
2. Open each Demo URL in the authenticated browser and save the page.
3. Extract Storybook iframe titles and preload chunk URLs.
4. Download story/component/CSS chunks from `https://elements.prod.accelerator.sanofi`.
5. Normalize story names, ids, args, visible labels, rendered HTML signals, and docgen props.
6. Write one `demo.registry.json` per component.
7. Validate that every registry has at least one story id, one source chunk, and one rendered snapshot or source snippet.

## Important Boundary

This captures Demo behavior and component implementation examples. It does not automatically capture full Overview, Anatomy, Best Practices, Accessibility, or Writing page text. Those still need separate page-content capture when Zeroheight page access is stable.

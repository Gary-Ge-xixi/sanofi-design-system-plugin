# Sanofi Design Runtime

This directory is the internal runtime boundary for Sanofi Elements HTML delivery.

It is not a clone of `@sanofi-accelerator/elements`, and it must not re-create component DOM by hand. Page renderers should emit component specs. The runtime is responsible for turning those specs into hydrated Sanofi Elements React components and bundling the required JS/CSS for HTML handoff.

The first-round backend scope is:

- Select
- Button
- SearchInput
- Tabs
- Menu/Sidebar
- Container/Grid
- Card
- Tag
- ProgressBar
- Icon

`Table` and `Chart` remain explicit fallback modules until official primitives are registered.

Run the preflight before building runtime HTML:

```bash
cd design-system-plugin/component-runtime
npm run preflight
```

The preflight must fail if the official package cannot be resolved. Do not fall back to hand-written DOM to make the page look correct.

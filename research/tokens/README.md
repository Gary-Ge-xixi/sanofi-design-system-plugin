# Sanofi Elements Token Source Summary

## Status

- Primary token baseline is Storybook `Foundations / Colors`: `https://elements.prod.accelerator.sanofi/?path=/docs/foundations-colors--docs`.
- The live Storybook page was verified in the user's authenticated incognito Chrome window and shows `Sanofi Elements v3.48.3`.
- Token source is extracted from the matching Storybook CSS bundle: `research/storybook/assets/iframe-RDcAcrX5.css`.
- Storybook page reports Elements version `v3.48.3` in `research/raw/storybook-introduction.html`.
- Live source evidence is recorded in `research/tokens/storybook-colors-live-check.json`.
- Local npm extraction is blocked until a GitHub Packages token is configured for `@sanofi-accelerator` packages.
- The generated files below are research artifacts extracted from the Storybook bundle, not a replacement for the official package export.

## Generated Files

- `elements-token-vars.css`: deduplicated first-seen `--elements-*` variables grouped by category for prototype CSS usage.
- `elements-token-declarations.txt`: all unique token declarations found in the CSS bundle.
- `elements-root-blocks.css`: original `:root` token blocks found in the CSS bundle, kept closer to source shape.

## Counts

- Token declaration occurrences in CSS: 1769
- Unique declaration strings: 836
- Unique token names in first-seen map: 640
- JS bundle includes DTCG token references: yes

## Next Use In Skill + Plugin System

- Use Storybook v3.48.3 `Foundations / Colors` as the token source of truth for this local prototype package.
- Use `elements-token-vars.css` as the local token dependency for static HTML prototype generation.
- Use `elements-token-declarations.txt` as the allowlist input for token compliance validation.
- Do not generate raw hex/px values in prototypes unless they map back to a listed token.

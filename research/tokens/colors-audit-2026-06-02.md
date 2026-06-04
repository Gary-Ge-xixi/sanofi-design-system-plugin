# Sanofi Elements Colors Audit - 2026-06-02

Source checked:
- Storybook `Foundations / Colors`: `https://elements.prod.accelerator.sanofi/?path=/docs/foundations-colors--docs`
- Local tokens: `design-system-plugin/design-system/tokens/tokens.css`

Live Storybook observation:
- Version: Sanofi Elements `v3.48.3`
- `Primitives / Brand` lists `Brand Sanofi Miracle Purple`.
- Brand swatches show `base #7A00E6` and `darkest #23004C`.
- `Semantics / Accent` maps primary accent tokens to brand core tokens.
- `Semantics / Backgrounds` maps success backgrounds to green core tokens.
- `Data Visualization Colors / Sequential Colors` is a separate ordered-data section, not the brand section.

Local token check:
- `--elements-color-semantic-accent-default` resolves through `--elements-color-core-brand-base`, which resolves to `--elements-core-brand-base`.
- `--elements-color-semantic-background-brand` resolves through `--elements-color-core-brand-base`, which resolves to `--elements-core-brand-base`.
- `--elements-color-semantic-text-accent-default` resolves through `--elements-color-core-brand-base`, which resolves to `--elements-core-brand-base`.
- `--elements-color-semantic-accent-success_default` resolves through green tokens and must not be used as a brand substitute.
- `--elements-color-data-sequential-green-*` is a data visualization family and must not be used as the default dashboard accent.
- `--elements-color-data-sequential-purple-*` is available for ordered data when a brand-aligned series is needed.

Correction applied:
- Dashboard chart default bars use `--elements-color-data-sequential-purple-4`.
- Progress fills use `--elements-color-semantic-accent-default`.
- Green tags remain only for explicit success/status states such as stable/normal.
- Branded tags use `components-tag--variants` with `data-variant="branded"`.
- Local `tokens.css` brand aliases were corrected from unresolved `--elements-color-core-brand_secondary-*` references to resolvable `--elements-core-brand-*` references.
- `scripts/transform-tokens` now fails when `tokens.css` contains unresolved internal `var(--elements-*)` references.

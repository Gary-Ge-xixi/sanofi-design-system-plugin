# Elements Research Coverage Status

Last updated: 2026-06-02

## Coverage Summary

| Layer | Coverage | Status | Notes |
|---|---:|---|---|
| Component navigation | 37 component pages | Complete for sidebar/catalog level | Captured page ids, uids, URLs, update timestamps, and visible tabs from sanitized Zeroheight styleguide data. |
| Token CSS research | 640 unique token names, 836 unique declarations | Partial but usable for prototypes | Extracted from Storybook CSS bundle. This is not the official package `token.css` export. |
| Accordion registry | 1 component | Partial | Tabs and anatomy labels are captured; click-through marker details are blocked by current private page/API access. |
| Demo tabs | 23 of 37 component pages | Pilot captured | Checkbox demo is captured as a pilot using Zeroheight saved page plus Storybook iframe/chunk sources. |
| Full component page content | 0 complete components | Not complete | Existing `research/raw/components/*.txt` files are not reliable captures and should not be used as official docs. |
| Storybook component chunks | Entry bundle plus Checkbox pilot chunks | Partial | Checkbox lazy-loaded story/component chunks are captured; other component chunks are still pending. |

## Reliable Sources

- `research/components/component-catalog.json`
- `research/components/component-catalog.md`
- `research/components/styleguide-summary.json`
- `research/components/accordion.registry.json`
- `research/components/accordion.md`
- `research/components/checkbox.demo.registry.json`
- `research/components/demo-capture-strategy.md`
- `research/components/demo-coverage.md`
- `research/tokens/elements-token-vars.css`
- `research/tokens/elements-token-declarations.txt`
- `research/tokens/elements-root-blocks.css`
- `research/tokens/README.md`

## Sources To Treat As Limited Or Invalid

- `research/raw/components/*.txt`: too small and not reliable as component documentation.
- `research/raw/html/accordion-overview/accordion-overview.html`: renders a private page, not usable as the Overview content source.
- `research/raw/html/menu-current/menu.html`: not an Elements component page capture.

## Current Blocker

The incognito Overview URL currently renders `This page is private`, and API/markdown export attempts did not return page blocks. To capture the clickable red anatomy marker details, the Overview page must be visible again in the browser session or exported through an authenticated/authorized content route.

## Token CSS Position

The current token files are suitable as a local research dependency for static HTML prototypes:

- Use `elements-token-vars.css` as the prototype CSS input.
- Use `elements-token-declarations.txt` as the token allowlist for validation.
- Do not treat these files as the official package export until `@sanofi-accelerator/elements` or the official token package can be installed with GitHub Packages authentication.

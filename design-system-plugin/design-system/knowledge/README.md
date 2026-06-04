# Sanofi Elements Knowledge Base

This folder is the source-indexed knowledge base for the local design-system plugin.

Use this folder as the retrieval entry point before generating or validating prototypes.

## Read Order

1. `source-index.json`
2. `components.json`
3. `tokens.json`
4. `coverage.json`
5. `storybook-pages.json`
6. `docs-index.json`, then the relevant file under `docs/*.md`
7. `../contracts/components/component-contract-index.json` before selecting components
8. `../contracts/semantic-token-map.json` before selecting tokens

## Policy

- Storybook v3.48.3 is the primary source.
- Zeroheight is secondary and used for page navigation/tab metadata.
- Raw captures under `research/raw/components/*.txt` are not trusted as full component docs.
- Generated HTML must use local Elements tokens and registered primitive contracts.

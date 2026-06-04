# Sanofi Design System Plugin

Local-first Sanofi Elements design-system package for generating and validating HTML prototypes from local registry, component contracts, tokens, business page profiles, patterns, templates, and rules.

## Main Entry

```bash
cd /Users/wanshuiwanqigaozhishang/Downloads/sainofi
design-system-plugin/scripts/sanofi-ds help
```

Common checks:

```bash
design-system-plugin/scripts/sanofi-ds doctor
design-system-plugin/scripts/sanofi-ds business standards
design-system-plugin/scripts/sanofi-ds token diff
design-system-plugin/scripts/sanofi-ds gap list
design-system-plugin/scripts/sanofi-ds report dashboard
```

Generate and validate the current admin query/fill page:

```bash
design-system-plugin/scripts/sanofi-ds render "OneCommercial CDC库存查询填报后台" --profile admin-data-entry-table --validate --screenshot
```

## Cursor Usage

Open this repository root in Cursor. Cursor should load:

```text
.cursor/rules/sanofi-design-system.mdc
```

Use the local toolkit from the Cursor terminal:

```bash
design-system-plugin/scripts/sanofi-ds doctor
design-system-plugin/scripts/sanofi-ds business standards
```

Detailed usage and maintenance guidance:

```text
design-system-plugin/outputs/reports/design-system-plugin-conflict-review-cursor-guide.md
design-system-plugin/outputs/reports/design-system-plugin-designer-maintenance-manual.md
```

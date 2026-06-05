# Sanofi Design System Plugin

Local-first Sanofi Elements design-system package for generating and validating HTML prototypes from local registry, component contracts, tokens, business page profiles, patterns, templates, and rules.

## Main Entry

Clone the repository and run commands from the repository root. The toolkit uses
relative paths, so it can live in any local directory.

```bash
git clone git@github.com:Gary-Ge-xixi/sanofi-design-system-plugin.git
cd sanofi-design-system-plugin
./design-system-plugin/scripts/sanofi-ds help
```

Common checks:

```bash
./design-system-plugin/scripts/sanofi-ds doctor
./design-system-plugin/scripts/sanofi-ds business standards
./design-system-plugin/scripts/sanofi-ds token diff
./design-system-plugin/scripts/sanofi-ds gap list
./design-system-plugin/scripts/sanofi-ds report dashboard
```

Generate and validate the current admin query/fill page:

```bash
./design-system-plugin/scripts/sanofi-ds render "OneCommercial CDC库存查询填报后台" --profile admin-data-entry-table --validate --screenshot
```

Generate and validate the OneOrbit approval suite pages:

```bash
cd design-system-plugin
./scripts/render-page-suite-html --suite oneorbit-approval-suite --page query-list
./scripts/render-page-suite-html --suite oneorbit-approval-suite --page message-todo
./scripts/validate-oneorbit-delivery
./scripts/measure-oneorbit-browser-metrics
cd ..
```

Open generated HTML from the repository root:

```bash
open design-system-plugin/outputs/html/oneorbit-has-query-list.resolved.html
open design-system-plugin/outputs/html/oneorbit-message-todo.resolved.html
```

## Cursor Usage

Open this repository root in Cursor. Cursor should load:

```text
.cursor/rules/sanofi-design-system.mdc
```

Use the local toolkit from the Cursor terminal:

```bash
./design-system-plugin/scripts/sanofi-ds doctor
./design-system-plugin/scripts/sanofi-ds business standards
```

Detailed usage and maintenance guidance:

```text
design-system-plugin/outputs/reports/design-system-plugin-conflict-review-cursor-guide.md
design-system-plugin/outputs/reports/design-system-plugin-designer-maintenance-manual.md
```

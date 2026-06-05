# Sanofi Design System Plugin

Local-first Sanofi Elements design-system package for generating and validating HTML prototypes from local registry, component contracts, tokens, business page profiles, patterns, templates, and rules.

## Main Entry

Clone the repository and run commands from the repository root. The toolkit uses
relative paths, so it can live in any local directory.

```bash
git clone https://github.com/Gary-Ge-xixi/sanofi-design-system-plugin.git
cd sanofi-design-system-plugin
./design-system-plugin/scripts/sanofi-ds help
```

If you prefer SSH and have your GitHub key configured:

```bash
git clone git@github.com:Gary-Ge-xixi/sanofi-design-system-plugin.git
```

Prerequisites:

- Node.js 18+ for the local scripts.
- Python 3 is optional, but useful for serving generated HTML locally.
- Chrome or Chromium is required only for screenshot and browser-geometry checks. The scripts auto-detect common install locations and `PATH`; set `CHROME_PATH=/path/to/chrome` if your browser is installed elsewhere.

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

Preview generated HTML in a browser:

```bash
cd design-system-plugin
python3 -m http.server 8799
```

Then visit:

```text
http://127.0.0.1:8799/outputs/html/oneorbit-has-query-list.resolved.html
http://127.0.0.1:8799/outputs/html/oneorbit-message-todo.resolved.html
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

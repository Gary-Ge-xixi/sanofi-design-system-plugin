# Sanofi Design System Plugin

Local-first Sanofi Elements design-system package for generating and validating HTML prototypes from local registry, component contracts, tokens, business page profiles, patterns, templates, and rules.

## Main Entry

Clone the repository and run commands from the repository root. The toolkit uses
relative paths, so it can live in any local directory.

```bash
git clone https://github.com/Gary-Ge-xixi/sanofi-design-system-plugin.git
cd sanofi-design-system-plugin
./install.sh
```

If you prefer SSH and have your GitHub key configured:

```bash
git clone git@github.com:Gary-Ge-xixi/sanofi-design-system-plugin.git
```

Prerequisites:

- Node.js 18+ for the local scripts.
- Python 3 is optional, but useful for serving generated HTML locally.
- Chrome or Chromium is required only for screenshot and browser-geometry checks. The scripts auto-detect common install locations and `PATH`; set `CHROME_PATH=/path/to/chrome` if your browser is installed elsewhere.

The installer checks the local Cursor project rule, verifies the root CLI entrypoint, runs basic script checks, and writes:

```text
design-system-plugin/outputs/reports/install.report.json
design-system-plugin/outputs/reports/install.report.md
```

For Cursor, open the repository root after installation. If the Cursor CLI is installed, this can be one command:

```bash
./install.sh --open-cursor
```

Common checks:

```bash
./sanofi-ds doctor
./sanofi-ds business standards
./sanofi-ds token diff
./sanofi-ds gap list
./sanofi-ds report dashboard
```

Generate and validate the current admin query/fill page:

```bash
./sanofi-ds render "OneCommercial CDC库存查询填报后台" --profile admin-data-entry-table --validate --screenshot
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
./install.sh
./sanofi-ds doctor
./sanofi-ds business standards
```

Detailed usage and maintenance guidance:

```text
docs/tutorials/design-spec-to-html-delivery.md
design-system-plugin/outputs/reports/design-system-plugin-conflict-review-cursor-guide.md
design-system-plugin/outputs/reports/design-system-plugin-designer-maintenance-manual.md
```

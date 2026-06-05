# Design System Maintenance Toolkit Implementation Plan

**Goal:** Build a single maintenance CLI that normalizes the existing Sanofi Elements local design-system scripts into a user-facing toolkit.

**Architecture:** Keep the existing scripts as low-level build, render, resolve, and validate commands. Add one orchestration script, `design-system-plugin/scripts/sanofi-ds`, that reads local contracts and routes common maintenance workflows to those scripts while writing readable reports. As of the latest local review, the script layer has grown to 67 commands, so the toolkit is the recommended user-facing entrypoint.

**Tech Stack:** Node.js standard library, local JSON/Markdown reports, existing `design-system-plugin/scripts/*` commands, static HTML reports.

---

### Task 1: Command Surface

**Files:**
- Create: `<repo-root>/design-system-plugin/scripts/sanofi-ds`

**Steps:**
1. Define command routing for `help`, `doctor`, `component inspect`, `token diff`, `profile inspect`, `rule list`, `rule validate`, `gap list`, `render`, and `report dashboard`.
2. Use the plugin root inferred from `__dirname`.
3. Run `node --check design-system-plugin/scripts/sanofi-ds`.

### Task 2: Maintenance Reports

**Files:**
- Create report outputs under `<repo-root>/design-system-plugin/outputs/reports/`

**Steps:**
1. Write one JSON and one Markdown report for each inspection command.
2. Summarize current registry, component, token, profile, rule, and fallback state.
3. Use stable filenames so future maintainers can compare runs.

### Task 3: Render Orchestration

**Files:**
- Modify through existing generated outputs only.

**Steps:**
1. Run `resolve-pattern` and `render-resolved-html`.
2. Optionally run the validator chain when `--validate` is present.
3. Optionally capture a Chrome screenshot when `--screenshot` is present and Chrome exists.

### Task 4: Documentation

**Files:**
- Modify: `<repo-root>/design-system-plugin/outputs/reports/design-system-plugin-designer-maintenance-manual.md`
- Modify: `<repo-root>/design-system-plugin/skills/design-prototype-generator/SKILL.md`

**Steps:**
1. Add the toolkit as the recommended productized entrypoint.
2. Keep raw scripts documented as internal implementation details.
3. Re-run `rg "sanofi-ds"` to verify both surfaces mention it.

### Task 5: Verification

**Commands:**
- `node --check design-system-plugin/scripts/sanofi-ds`
- `design-system-plugin/scripts/sanofi-ds help`
- `design-system-plugin/scripts/sanofi-ds doctor`
- `design-system-plugin/scripts/sanofi-ds component inspect button`
- `design-system-plugin/scripts/sanofi-ds token diff`
- `design-system-plugin/scripts/sanofi-ds profile inspect admin-data-entry-table`
- `design-system-plugin/scripts/sanofi-ds rule list`
- `design-system-plugin/scripts/sanofi-ds rule validate admin-data-entry-table-reference-fit design-system-plugin/outputs/html/admin-query-panel.resolved.html`
- `design-system-plugin/scripts/sanofi-ds gap list`
- `design-system-plugin/scripts/sanofi-ds report dashboard`

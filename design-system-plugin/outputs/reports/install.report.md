# Install Report

Status: pass

| Check | Status | Detail |
|---|---|---|
| node | pass | Node.js 26.0.0. Node.js version is supported. |
| cursor-rule | pass | .cursor/rules/sanofi-design-system.mdc |
| root-entrypoint | pass | ./sanofi-ds |
| browser | pass | Chrome or Chromium executable detected. |
| syntax:design-system-plugin/scripts/install-cursor | pass | ok |
| syntax:design-system-plugin/scripts/sanofi-ds | pass | ok |
| syntax:design-system-plugin/scripts/validate-install-portability | pass | ok |
| syntax:design-system-plugin/scripts/lib/chrome-path.cjs | pass | ok |
| sanofi-ds-help | pass | Root entrypoint works. |
| doctor | skip | Skipped by --skip-doctor. |
| install-portability | pass | No local author paths or fixed install paths detected. |
| open-cursor | skip | Not requested. |

## Next Commands

```bash
./sanofi-ds doctor
./sanofi-ds business standards
```

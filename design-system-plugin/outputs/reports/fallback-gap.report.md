# Fallback Gap List

Status: pass

| Module | Status | Reason |
|---|---|---|
| table | token-only-pattern | No official Table/DataTable/DataGrid primitive is registered locally. |
| chart | token-only-pattern | No official Chart/Data Visualization primitive is registered locally. |
| metric-card | compose-from-primitives | No dedicated Metric/KPI primitive is registered locally. |
| page-header | docs-only-gap | PageHeader docs exist but no primitive contract is registered yet. |
| date-picker | docs-only-gap | DatePicker docs exist but no primitive contract is registered yet. |
| modal | docs-only-gap | Modal docs exist but no primitive contract is registered yet. |
| drawer | docs-only-gap | Drawer docs exist but no primitive contract is registered yet. |

## Profile Fallback Policy

```json
{
  "table": {
    "status": "token-only-pattern",
    "allowed_markup": [
      "table",
      "thead",
      "tbody",
      "tr",
      "th",
      "td"
    ],
    "must_not_claim_primitive": true,
    "required_marker": "data-table-list-role=\"fallback\""
  }
}
```

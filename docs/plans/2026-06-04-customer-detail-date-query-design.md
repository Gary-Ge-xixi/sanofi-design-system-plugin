# Customer Detail Date Query Design

## Goal

Build a test page for querying customer detail records by date while keeping filters, customer summary, detail table, and actions in one screen family.

## Approved Direction

Use the third option: query, summary, detail table, and actions on the same page. This should not be treated as a dashboard page or a hand-built one-off HTML file.

## Page Classification

- Page profile: `customer-detail-date-query`
- Page family: `customer-detail-date-query`
- Business task: `query-customer-detail-by-date`
- Output: `design-system-plugin/outputs/html/customer-detail-date-query.resolved.html`
- Reference fit: `business-page-family`

## Page Structure

1. Breadcrumb and PageHeader.
2. Complex date query form with DatePicker range, customer keyword, region, customer group, status, product line, and owner.
3. Customer summary strip with selected customer, date range, record count, risk amount, last sync time, and permission state.
4. Customer detail table fallback with date, customer, product, quantity, amount, status, owner, and action columns.
5. Result actions and pagination in the same page.

## Runtime State

- Official runtime: absent.
- Local atomic runtime: present for Select, DatePicker, SearchInput, Button, Sidebar/Menu/Icon, Container/Grid, Tag/Card when reused.
- Explicit fallback: present for the detail table only.

## Validation

The page must pass:

- `validate-business-page-examples`
- `validate-customer-detail-date-query-page`
- `validate-reference-fit`
- `validate-component-runtime`
- `validate-app-shell-scroll`
- `validate-page-layout-typography`

The validator must prove:

- Date range DatePicker exists and defaults to medium.
- No visible native `select[data-primitive="select"]` is used.
- Query form has at least six filters.
- Customer summary is visible.
- Detail table is explicit fallback and does not claim official Table/DataGrid runtime.
- Output state is visible in the page and report.

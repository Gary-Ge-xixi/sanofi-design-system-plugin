---
storybook_id: components-breadcrumb-item--docs
title: "Components/Breadcrumb.Item"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-breadcrumb-item--docs"
import_path: "./src/components/Breadcrumb/item/BreadcrumbItem.stories.tsx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:05:50.082Z
---

# Source: Components/Breadcrumb.Item

- Storybook ID: `components-breadcrumb-item--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-breadcrumb-item--docs
- Import path: `./src/components/Breadcrumb/item/BreadcrumbItem.stories.tsx`
- Capture status: `extracted`

# Breadcrumb.Item

Breadcrumb Item Component

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| href | URL for standard anchor links.string | - | # |
| deactivate | Disables the link and shows as plain text.
Use for the current page (last item).boolean | false | FalseTrue |
| children | Text label for the breadcrumb item.string | - | Home |
| to | Path for React Router Link component.
Use with as={RouterLink}.string | - |  |
| className | Additional CSS class.string | - |  |
| routerLink | ElementType | - |  |
| onClick | Click handler for the breadcrumb link.MouseEventHandler<HTMLAnchorElement> | - |  |
| others | Additional props passed to the anchor element.DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> | - |  |
| ellipsis | Enables text truncation with tooltip on hover.
Use for long page titles.boolean | false |  |
| maxWidth | Maximum width before text is truncated (requires ellipsis).number | 150 |  |
| as | Element type to render as.
Use for custom link components (e.g., React Router).ElementType | - |  |

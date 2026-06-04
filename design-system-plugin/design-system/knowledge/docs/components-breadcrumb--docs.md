---
storybook_id: components-breadcrumb--docs
title: "Components/Breadcrumb"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-breadcrumb--docs"
import_path: "./src/components/Breadcrumb/Breadcrumb.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:05:53.958Z
---

# Source: Components/Breadcrumb

- Storybook ID: `components-breadcrumb--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-breadcrumb--docs
- Import path: `./src/components/Breadcrumb/Breadcrumb.mdx`
- Capture status: `extracted`

# Breadcrumb

## A breadcrumb trail consists of a list of links to the parent pages of
the current page in hierarchical order. It helps users find their place
within a website or web application.
Breadcrumbs are often placed horizontally before a page's main content.See the WAI-ARIA Breadcrumb Pattern

## Example

## Anatomy

```
import { Breadcrumb } from "@sanofi-accelerator/elements";

const Component = () => (
  <Breadcrumb itemsBeforeCollapse={2} itemsAfterCollapse={2} maxItems={6}>
    <Breadcrumb.Item href="#">
      Home
    </Breadcrumb.Item>,
    <Breadcrumb.Item href="#">
      Investor Relations
    </Breadcrumb.Item>,
    <Breadcrumb.Item href="#">
      Financial Results and Investor Events
    </Breadcrumb.Item>,
    <Breadcrumb.Item href="#">
      Middle Quarter Results
    </Breadcrumb.Item>,
    <Breadcrumb.Item href="#">
      Quarterly Results
    </Breadcrumb.Item>,
    <Breadcrumb.Item deactivate>
      Second quarter 2023 results
    </Breadcrumb.Item>
  </Breadcrumb>
);
```

## API Reference

### Breadcrumb

| Name | Description | Default |
| --- | --- | --- |
| itemsBeforeCollapse | If max items is exceeded, the number of items to show before the ellipsis.number | 0 |
| itemsAfterCollapse | If max items is exceeded, the number of items to show after the ellipsis.number | 0 |
| maxItems | Specifies the maximum number of breadcrumbs to display. When there are more than the maximum number, only the first itemsBeforeCollapse and last itemsAfterCollapse will be shown, with an ellipsis in between.number | 6 |
| children | Breadcrumb.Item components representing the path.ReactNode | - |
| className | Additional CSS class for the breadcrumb container.string | - |
| brandTheme | Override the theme at component level."primary""secondary""tertiary" | "BrandTheme.primary" |
| noWrap | Prevent breadcrumb items from wrapping to new lines when there's insufficient space.boolean | false |
| ellipsis | Enable ellipsis mode with tooltip when text overflows the container.- | - |
| maxWidth | Maximum width for ellipsed text in pixels (default: 150)- | - |

### Item

| Name | Description | Default |
| --- | --- | --- |
| href | URL for standard anchor links.string | - |
| deactivate | Disables the link and shows as plain text.
Use for the current page (last item).boolean | false |
| children | Text label for the breadcrumb item.string | - |
| to | Path for React Router Link component.
Use with as={RouterLink}.string | - |
| className | Additional CSS class.string | - |
| routerLink | ElementType | - |
| onClick | Click handler for the breadcrumb link.MouseEventHandler<HTMLAnchorElement> | - |
| others | Additional props passed to the anchor element.DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> | - |
| ellipsis | Enables text truncation with tooltip on hover.
Use for long page titles.boolean | false |
| maxWidth | Maximum width before text is truncated (requires ellipsis).number | 150 |
| as | Element type to render as.
Use for custom link components (e.g., React Router).ElementType | - |

## Accessibility

The breadcrumb component is built with accessibility in mind. It follows the
ARIA Breadcrumb Pattern and
includes the following keyboard interactions:

Tab is used to navigate through each page link. Enter is used
to activate and enter the link. When there's a ellipsis, the tab enter will open
the truncation and display the links inside. The tab will remain on the first link
opened of the truncation. The current location is not reached by the tab.

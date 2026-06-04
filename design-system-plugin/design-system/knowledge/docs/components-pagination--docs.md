---
storybook_id: components-pagination--docs
title: "Components/Pagination"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-pagination--docs"
import_path: "./src/components/Pagination/Pagination.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:09:55.204Z
---

# Source: Components/Pagination

- Storybook ID: `components-pagination--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-pagination--docs
- Import path: `./src/components/Pagination/Pagination.mdx`
- Capture status: `extracted`

# Pagination

## Pagination is a user interface pattern used to divide large sets of content or data into manageable, discrete pages. It allows users to navigate through content systematically, by separating these pages, improving overall user experience and accessibility.

## Example

## Anatomy

```
import { Pagination } from "@sanofi-accelerator/elements";

const Component = () => (
  <Pagination totalPages={10} />
);
```

## Pagination is a user interface pattern used to divide large sets of content or data into manageable, discrete pages. It allows users to navigate through content systematically, by separating these pages, improving overall user experience and accessibility.

## API Reference

### Menu

| Name | Description | Default |
| --- | --- | --- |
| totalPages* | Total number of pagesnumber | - |
| sizeVariant | Size variant"default""compact" | "SizeVariant.DEFAULT" |
| variant | Pagination mode"compact""standard""compactWithInput" | "Variant.STANDARD" |
| showLabelsOnDesktop | Show labels on desktopboolean | false |
| showFirstAndLastPageButtons | Show first and last page buttonsboolean | false |
| aria-label | string | - |
| currentPage | Current pagenumber | 1 |
| onPageChange | Callback when page is changed((e: ChangeEvent<HTMLInputElement, Element> \| MouseEvent<HTMLButtonElement, MouseEvent>, page: number) => void) | - |
| previousMessageI18n | Custom label for "Previous" button (i18n).string | "Previous" |
| nextMessageI18n | Custom label for "Next" button (i18n).string | "Next" |
| brandTheme | Override the theme at component level."primary""secondary""tertiary" | "BrandTheme.primary" |
| disabled | Disables all pagination controls.boolean | false |

### Mobile Version

```
import { Pagination, SizeVariant } from "@sanofi-accelerator/elements";

const Component = () => (
  <Pagination totalPages={10} sizeVariant={SizeVariant.DEFAULT} />
);
```

### Pagination Compact

Page 1 of 17

```
import { Pagination, Variant } from "@sanofi-accelerator/elements";

const Component = () => (
  <Pagination totalPages={10} variant={Variant.COMPACT} />
);
```

### Pagination Compact with input field

Page

of 17

```
import { Pagination, Variant } from "@sanofi-accelerator/elements";

const Component = () => (
  <Pagination totalPages={10} variant={Variant.COMPACT_WITH_INPUT} />
);
```

### Pagination Compact with First and Last Page Buttons

Page 1 of 17

```
import { Pagination, Variant } from "@sanofi-accelerator/elements";

const Component = () => (
  <Pagination
    totalPages={10}
    variant={Variant.COMPACT}
    showFirstAndLastPageButtons={true}
  />
);
```

### Pagination Compact with Input Field and First/Last Buttons

Page

of 17

```
import { Pagination, Variant } from "@sanofi-accelerator/elements";

const Component = () => (
  <Pagination
    totalPages={10}
    variant={Variant.COMPACT_WITH_INPUT}
    showFirstAndLastPageButtons={true}
  />
);
```

## Accessibility

The Pagination component uses a nav element to be identified as a navigation section to screen readers and other assistive technologies. It needs a unique and descriptive ARIA label.

Tab is used to navigate between page numbers. Enter is used
to select a page.

When showFirstAndLastPageButtons is enabled, the first and last page buttons include proper ARIA labels ("Go to first page" and "Go to last page") and are automatically disabled when on the first or last page respectively to improve accessibility.

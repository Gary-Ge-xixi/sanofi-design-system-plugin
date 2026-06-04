---
storybook_id: components-accordion-item--docs
title: "Components/Accordion.Item"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-accordion-item--docs"
import_path: "./src/components/Accordion/AccordionItem.stories.tsx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:05:26.599Z
---

# Source: Components/Accordion.Item

- Storybook ID: `components-accordion-item--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-accordion-item--docs
- Import path: `./src/components/Accordion/AccordionItem.stories.tsx`
- Capture status: `extracted`

# Accordion.Item

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| size | Size variant of the accordion item."small""medium" | "AccordionSize.MEDIUM" | sizesmallmedium |
| title* | Header content (text or custom elements).ReactNode | - | "Accordion Title is Here" |
| isActiveSection* | boolean | - | FalseTrue |
| sectionIndex* | number | - |  |
| onClick | Callback fired when header is clicked.((e: MouseEvent<Element, MouseEvent>, isExpanded?: boolean) => void) | - | - |
| children* | Panel content revealed when section is expanded.ReactNode | - | "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." |
| brandTheme | Override the theme at component level."primary""secondary""tertiary" | "BrandTheme.primary" | brandThemeChoose option...primarysecondarytertiary |

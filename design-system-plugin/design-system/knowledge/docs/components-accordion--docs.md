---
storybook_id: components-accordion--docs
title: "Components/Accordion"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-accordion--docs"
import_path: "./src/components/Accordion/Accordion.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:05:29.814Z
---

# Source: Components/Accordion

- Storybook ID: `components-accordion--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-accordion--docs
- Import path: `./src/components/Accordion/Accordion.mdx`
- Capture status: `extracted`

# Accordion

## Accordions are interactive user interface elements used to present content in
a collapsible and expandable format. They allow users to control the
visibility of content sections, providing a more organized and concise user
experience.See the WAI-ARIA Accordion Pattern

## Example

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Aliquam vel libero et tortor sagittis condimentum. Nam id varius turpis, id pharetra eros. Mauris purus tortor, mattis quis eros in, molestie pharetra lorem. Morbi viverra urna purus, nec ornare purus aliquet et. Curabitur tempus nulla id leo eleifend, sit amet lobortis libero interdum. Proin nulla neque, imperdiet nec metus in, volutpat accumsan sem. Curabitur imperdiet et turpis at condimentum. Nunc nec quam fringilla, porta elit nec, pellentesque ligula.

Optionnal caption

## Anatomy

```
import { Accordion } from "@sanofi-accelerator/elements";

export default () => (
<Accordion isExclusive={false}>
    <Accordion.Item
      title={"Accordion Title is Here"}
      size={AccordionSize.MEDIUM}
      isActiveSection={true}
      sectionIndex={0}
      onClick={() => {
        alert("The onClick props is called.");
      }}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Accordion.Item>
</Accordion>
);
```

## API Reference

### Container

The container for the Accordion.

| Name | Description | Default |
| --- | --- | --- |
| children* | Accordion.Item components to render.ReactNode | - |
| isExclusive | When true, only one section can be expanded at a time.
Opening a section closes any previously open section.boolean | false |
| headersTag | HTML heading tag for accordion headers.
Use to maintain proper document outline hierarchy."h1""h2""h3""h4""h5""h6" | "\"h3\"" |
| disableAnimation | Disables expand/collapse animations.boolean | false |

### Item

Item of the Accordion.

| Name | Description | Default |
| --- | --- | --- |
| title* | Header content (text or custom elements).ReactNode | - |
| size | Size variant of the accordion item."small""medium" | "AccordionSize.MEDIUM" |
| isActiveSection* | boolean | - |
| sectionIndex* | number | - |
| children* | Panel content revealed when section is expanded.ReactNode | - |
| brandTheme | Override the theme at component level."primary""secondary""tertiary" | "BrandTheme.primary" |
| onClick | Callback fired when header is clicked.((e: MouseEvent<Element, MouseEvent>, isExpanded?: boolean) => void) | - |

## Accessibility

The Accordion component is built with accessibility in mind. It follows the
ARIA Accordion Pattern and
includes the following keyboard interactions:

- When the focus is on the Accordion:
  - Enter or Space - Expand/close the Accordion
  - Tab on the Accordion will enable to navigate to the next Item.
  - Shift + Tab on the Accordion will enable to navigate to the
previous Item.

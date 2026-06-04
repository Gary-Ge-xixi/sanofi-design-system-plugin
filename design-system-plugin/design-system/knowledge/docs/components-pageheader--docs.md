---
storybook_id: components-pageheader--docs
title: "Components/PageHeader"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-pageheader--docs"
import_path: "./src/components/PageHeader/PageHeader.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:09:51.356Z
---

# Source: Components/PageHeader

- Storybook ID: `components-pageheader--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-pageheader--docs
- Import path: `./src/components/PageHeader/PageHeader.mdx`
- Capture status: `extracted`

# PageHeader

## PageHeader is a component that is used to display a header on a page. It can
include a title, description, eyebrows, search input, action buttons, icon
button, and tabs.

## Example

# Page title

Icon eyebrow

Icon eyebrow

Page description can go here, but will always be optional.

## Anatomy

```
import {
    PageHeader,
    IconName,
    IconPosition,
    LinkSize,
    Tabs,
    Tab,
    LinkStandalone,
    SearchInput,
    InputSize,
    Button,
    ButtonVariant
} from "@sanofi-accelerator/elements";

const Component = () => (
  <PageHeader
    backNavigationLink={
        <LinkStandalone
            iconName={IconName.ARROW_BACK}
            iconPosition={IconPosition.START}
            size={LinkSize.SMALL}
        >
            Back
        </LinkStandalone>
    }
    title="Page title"
    description="Page description can go here, but will always be optional."
    eyebrows={[
        { text: "Icon eyebrow", iconName: IconName.CALENDAR_MONTH },
        { text: "Icon eyebrow", iconName: IconName.SUPERVISED_USER_CIRCLE },
    ]}
    searchInput={
        <SearchInput placeholder="Placeholder" size={InputSize.MEDIUM} />
    }
    actionButtons={[
        <Button key={1} label="Primary" variant={ButtonVariant.PRIMARY} />,
        <Button key={2} label="Secondary" variant={ButtonVariant.SECONDARY} />,
    ]}
    iconButton={
        <ButtonIcon icon={IconName.MORE_VERT} variant={ButtonVariant.TERTIARY} />
    }
    tabs={
        <Tabs defaultSelected="tab1">
            <Tabs.List>
            <Tab name="tab1">Item 1</Tab>
            <Tab name="tab2">Item 2</Tab>
            <Tab name="tab3">Item 3</Tab>
            <Tab name="tab4">Item 4</Tab>
            <Tab name="tab5">Item 5</Tab>
            </Tabs.List>
        </Tabs>
    }
  />
);
```

## API Reference

### Card

| Name | Description | Default |
| --- | --- | --- |
| backNavigationLink | Back navigation link element.ReactNode | - |
| title* | Main page title (required).ReactNode | - |
| description | Description text below the title.string | - |
| eyebrows | Eyebrow labels above the title.Eyebrow[] | - |
| searchInput | Search input element.ReactNode | - |
| tabs | Tabs component for sub-navigation.ReactNode | - |
| actionButtons | Action buttons displayed on the right.ReactNode[] | - |
| iconButton | Icon button (e.g., settings, more options).ReactNode | - |
| containerType | Container width behavior."fixed""fluid" | "\"fluid\"" |

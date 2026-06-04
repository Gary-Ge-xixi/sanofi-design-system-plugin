---
storybook_id: components-card--docs
title: "Components/Card"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-card--docs"
import_path: "./src/components/Card/Card.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:06:24.583Z
---

# Source: Components/Card

- Storybook ID: `components-card--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-card--docs
- Import path: `./src/components/Card/Card.mdx`
- Capture status: `extracted`

# Card

## Cards are surfaces that display a summary of content and activities associated
with a specific topic. Cards can also be used as buttons when displaying
multiple category selections.See the WAI-ARIA Card Pattern

## Grid Example

Eyebrow One (i.e Category)

Eyebrow Two (i.e Date)

### Title placeholder, with a maximum line count of three, with automatic truncation

## Anatomy

```
import { Card, CardType, Image, Link, LinkStandalone, IconName, Tag, TagCategoricalColor, TagSize } from "@sanofi-accelerator/elements";

const Component = () => (
  <Card type={CardType.GRID}>
    <Card.Section>
      <Card.Media>
        <Image src={"https://cdn.prod.accelerator.sanofi/elements/images/cards-mediasanofi.webp"} alt={"Sanofi_image"} />
      </Card.Media>
      <Card.Content
        category="Eyebrow One (i.e Category)"
        date="Eyebrow Two (i.e Date)"
        title="Title placeholder, with a maximum line count of three, with
          automatic truncation"
        tags={(
          <>
            <Tag color={TagCategoricalColor.NEUTRAL} size={TagSize.SM}>Tag one</Tag>
            <Tag color={TagCategoricalColor.NEUTRAL} size={TagSize.SM}>Tag two</Tag>
            <Tag color={TagCategoricalColor.NEUTRAL} size={TagSize.SM}>Tag three</Tag>
          </>
        )}
        secondaryEyebrows={[
          { text: "20 min", iconName: IconName.SCHEDULE },
          { text: "3 lessons", iconName: IconName.SCHOOL },
        ]}
        subText="Description placeholder, with a maximum line count of five. This
          text will automatically truncate if your content is too long."
        buttonSlot={(
          <Card.Button
            icon={IconName.MORE_VERT}
            onClick={() => console.log("clicked")}
          />
        )}
      >
        <Link href={"#"} variant="inline">
          Link
        </Link>
        <Link href={"#"} variant="inline">
          Link
        </Link>
      </Card.Content>
    </Card.Section>
    <Card.Action>
      <LinkStandalone href={"#"} size={LinkSize.SMALL}>
        See more
      </LinkStandalone>
    </Card.Action>
    <Card.Footer
      firstContent="Legal mentions on first line"
      secondContent="Legal mentions on second line"
    />
  </Card>
);
```

## List Example

Eyebrow One (i.e Category)

Eyebrow Two (i.e Date)

### This is a title placeholder

## Anatomy

```
import { Card, CardType, Image, LinkStandalone, IconName, Tag, TagCategoricalColor, TagSize } from "@sanofi-accelerator/elements";

const Component = () => (
  <Card type={CardType.LIST}>
    <Card.Media key="media">
      <Image src={"https://cdn.prod.accelerator.sanofi/elements/images/cards-mediasanofi.webp"} alt="Sanofi_image" />
    </Card.Media>
    <Card.Section key="section">
      <Card.Content
        category="Eyebrow One (i.e Category)"
        date="Eyebrow Two (i.e Date)"
        title="This is a title placeholder for a card which has a maximum line length on two lines."
        tags={(
          <>
            <Tag color={TagCategoricalColor.NEUTRAL} size={TagSize.SM}>Tag one</Tag>
            <Tag color={TagCategoricalColor.NEUTRAL} size={TagSize.SM}>Tag two</Tag>
            <Tag color={TagCategoricalColor.NEUTRAL} size={TagSize.SM}>Tag three</Tag>
          </>
        )}
        secondaryEyebrows={[
          { text: "20 min", iconName: IconName.SCHEDULE },
          { text: "3 lessons", iconName: IconName.SCHOOL },
        ]}
        subText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
        buttonSlot={(
          <Card.Button
            icon={IconName.MORE_VERT}
            onClick={() => console.log("clicked")}
          />
        )}
      />
      <Card.Action key="action">
        <LinkStandalone href={"#"} size={LinkSize.SMALL}>
          Standalone link
        </LinkStandalone>
      </Card.Action>
    </Card.Section>
  </Card>
);
```

## API Reference

### Card

| Name | Description | Default |
| --- | --- | --- |
| hasBorder | If the card has a borderboolean | true |
| hasShadow | If the card has a shadow at hoverboolean | false |
| type | The type of card"list""grid" | "CardType.GRID" |
| isCentered | If the card elements are centeredboolean | - |
| withButtonIcon | boolean | - |
| positionPicto | string | - |
| brandTheme | The brand theme"primary""secondary""tertiary" | "BrandTheme.primary" |
| density | The density of the card"default""tight" | "CardDensity.DEFAULT" |
| color | The color of the numberstring | - |
| invertDayAndMonth | If the day and month are invertedboolean | - |
| category | string | - |
| date | string | - |
| title | string | - |
| subText | string | - |
| children | The card childrenReactNode | - |
| className | Additional CSS class for the card containerstring | - |
| onClick | Click handler that makes the entire card interactive.
When set, the card renders as a button element.MouseEventHandler<HTMLButtonElement> | - |
| titleSize | The title size- | - |
| showFullContent | If the subtext should not be truncated- | - |

### Sub-components:

- Card.Section
NameDescriptionDefaultchildrenThe card section childrenReactNode-
- Card.Media
NameDescriptionDefaultchildrenThe card media childrenReactNode-ratioAspect ratio for the media container.string"1/1"
- Card.MediaCustom
NameDescriptionDefaultchildrenThe card media custom childrenReactNode-isCenteredCenters the media verticallyboolean-endSidePositions media on the end side (right in LTR)booleanfalseclassnamesCustom CSS classes{ container?: string; }-
- Card.Date
NameDescriptionDefaultdate*The card dateDate-invertDayAndMonthSwaps day and month order (for non-US formats)boolean-
- Card.Content
NameDescriptionDefaultcategoryCategory label displayed above title (e.g., "Technology", "News")string-dateThe card datestring-eyebrowComponentCustom eyebrow component (overrides category/date)ReactNode-titleCard title - use Title component for proper stylingReactNode-tagsTag elements displayed under the titleReactNode-secondaryEyebrowsOptional second eyebrow row displayed under tagsEyebrow[]-withDividerShows a divider line between title and contentboolean-subTextDescription or summary text below the titleReactNode-buttonSlotSlot for action button in content areaReactNode-childrenAdditional content (links, tags, etc.)ReactNode-isCenteredCenters all content horizontallybooleanfalseclassnamesCustom CSS classes for content elements{ subtext?: string; title?: string; } | undefined-showFullContentShows full content without truncationbooleanfalse
- Card.Action
NameDescriptionDefaultchildrenThe card action childrenReactNode-isCenteredCenters the action content horizontallybooleanfalse
- Card.Footer
NameDescriptionDefaultfirstContentLeft-aligned content (e.g., price, metadata)ReactNode-secondContentRight-aligned content (e.g., action button)ReactNode-isCenteredCenters both content slotsbooleanfalse

## Accessibility

The Card component is built with accessibility in mind. It follows the
ARIA Card Pattern and
includes the following keyboard interactions:

Tab is used to navigate through all interactives elements inside the card
like Videos/Links/Buttons from the top to the bottom.
Enter is used to activate all interactives elements inside the card like
Videos/Links/Buttons.

### Warning: Clickable Cards

> ⚠️ Do not add interactive elements inside a clickable Card.
> 
> When a Card is made clickable (e.g., wrapped in a link or using an onClick handler that makes the entire card interactive), you should not include nested interactive elements such as buttons, links, or other clickable controls inside the card.
> 
> Why?
> 
> - Nesting interactive elements (e.g., a <button> inside an <a>) violates HTML semantics and causes unpredictable behavior.
> - Screen readers may not correctly announce the nested interactive elements.
> - Keyboard navigation becomes confusing as users cannot distinguish between the card action and the nested actions.
> 
> Best practice: If your card needs to be fully clickable, remove any <Link>, <Button>, or <Card.Action> children. If you need multiple actions, keep the card non-clickable and use explicit action buttons or links instead.

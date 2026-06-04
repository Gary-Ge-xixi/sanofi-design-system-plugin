---
storybook_id: components-carousel--docs
title: "Components/Carousel"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-carousel--docs"
import_path: "./src/components/Carousel/Carousel.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:06:43.918Z
---

# Source: Components/Carousel

- Storybook ID: `components-carousel--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-carousel--docs
- Import path: `./src/components/Carousel/Carousel.mdx`
- Capture status: `extracted`

# Carousel

## A Carousel is a common UI element on websites that displays a collection of
items (usually images) in a rotating slideshow format. Carousels are often
used on homepages to showcase featured content, products, or promotions.
Attention: carousel should not be overrused with too many items. Consider this
when designing with carousels.See the WAI-ARIA Carousel Pattern

## Example

## Carousel

1

### Title placeholder, with a maximum

2

### Title placeholder, with a maximum

3

### Title placeholder, with a maximum

4

### Title placeholder, with a maximum

5

### Title placeholder, with a maximum

6

### Title placeholder, with a maximum

7

### Title placeholder, with a maximum

8

### Title placeholder, with a maximum

## Anatomy

```
import { Carousel, Typography, TypographyColor, LinkStandalone, Link, Image, Card, ButtonIcon, IconName, LinkSize } from "@sanofi-accelerator/elements";

interface ICardContentData {
  id: string;
  category?: string;
  date?: string;
  onClick?: () => void;
  subText?: string;
  title?: string;
  link?: Array<string>;
  imgSrc?: string;
}

const doctor = "https://cdn.prod.accelerator.sanofi/elements/images/doctor.png";
const baby = "https://cdn.prod.accelerator.sanofi/elements/images/baby.png";
const babies = "https://cdn.prod.accelerator.sanofi/elements/images/babies.png";
const cardContentData: Array<ICardContentData> = [
  {
    id: "1",
    subText:
      "Description placeholder, with a maximum line count of five. This text will automatically truncate if your content is too long.",
    title: "Title placeholder, with a maximum",
    imgSrc:
      "https://cdn.prod.accelerator.sanofi/elements/images/cards-mediasanofi.webp",
  },
  {
    id: "2",
    subText:
      "Description placeholder, with a maximum line count of five. This text will automatically truncate if your content is too long.",
    title: "Title placeholder, with a maximum",
    imgSrc: baby,
  },
  {
    id: "3",
    subText:
      "Description placeholder, with a maximum line count of five. This text will automatically truncate if your content is too long.",
    title: "Title placeholder, with a maximum",
    imgSrc: babies,
  },
  {
    id: "4",
    subText:
      "Description placeholder, with a maximum line count of five. This text will automatically truncate if your content is too long.",
    title: "Title placeholder, with a maximum",
    imgSrc: doctor,
  },
  {
    id: "5",
    subText:
      "Description placeholder, with a maximum line count of five. This text will automatically truncate if your content is too long.",
    title: "Title placeholder, with a maximum",
    imgSrc:
      "https://cdn.prod.accelerator.sanofi/elements/images/cards-mediasanofi.webp",
  },
  {
    id: "6",
    subText:
      "Description placeholder, with a maximum line count of five. This text will automatically truncate if your content is too long.",
    title: "Title placeholder, with a maximum",
    imgSrc: doctor,
  },
  {
    id: "7",
    subText:
      "Description placeholder, with a maximum line count of five. This text will automatically truncate if your content is too long.",
    title: "Title placeholder, with a maximum",
    imgSrc: baby,
  },
  {
    id: "8",
    subText:
      "Description placeholder, with a maximum line count of five. This text will automatically truncate if your content is too long.",
    title: "Title placeholder, with a maximum",
    imgSrc:
      "https://cdn.prod.accelerator.sanofi/elements/images/cards-mediasanofi.webp",
  },
];

const cardInternal = (cardContentData: ICardContentData, hasMedia: boolean) => (
  <Card>
    <Card.Section>
      {hasMedia ? (
        <Card.Media>
          <Image alt="alt text" src={cardContentData.imgSrc ?? ""} />
        </Card.Media>
      ) : (
        <Card.MediaCustom>
          <Typography
            as="p"
            variant="display-2"
            color={TypographyColor.CURRENT_COLOR}
          >
            {cardContentData.id}
          </Typography>
          <ButtonIcon
            icon={IconName.MORE_VERT}
            variant="tertiary"
            onClick={() => alert("the onclick props is called")}
          />
        </Card.MediaCustom>
      )}

      <Card.Content
        category={cardContentData.category}
        date={cardContentData.date}
        subText={cardContentData.subText}
        title={cardContentData.title}
        buttonSlot={(
          <Card.Button
            icon={IconName.MORE_VERT}
            onClick={cardContentData.onClick}
          />
        )}
      >
        {cardContentData.link?.map((link) => (
          <Link href={link} variant="inline" key={link}>
            Link
          </Link>
        ))}
      </Card.Content>
    </Card.Section>
    <Card.Action>
      <LinkStandalone iconName="arrow_forward" href={"#"} size={LinkSize.SMALL}>
        See more
      </LinkStandalone>
    </Card.Action>
  </Card>
);

const Component = () => (
  <Carousel
    title="Carousel"
    itemsToShow={3}
    defaultSlide={0}
    onNavigation={(slide: number, itemCount: number) => {
      console.log("slide: ", slide, "itemCount: ", itemCount);
    }}
  >
    {cardContentData.map((el) => (
      <div key={el.id}>{cardInternal(el, false)}</div>
    ))}
  </Carousel>
);
```

## API Reference

### Caroussel

| Name | Description | Default |
| --- | --- | --- |
| title | Title of the carouselstring | "" |
| itemsToShow* | Number of items to show in the carouselnumber | 3 |
| oneItemView | boolean | - |
| defaultSlide | Default slide to shownumber | 0 |
| onNavigation | Function to be called when navigating the carouselfunction | "" |
| brandTheme | "primary""secondary""tertiary" | "BrandTheme.primary" |

## Accessibility

The Carousel component is built with accessibility in mind. It follows the
ARIA Carousel Pattern and
includes the following keyboard interactions:

Tab and Shift+Tab : Move focus through the interactive elements
of the carousel as specified by the page tab sequence -- scripting for Tab is not
necessary.

Button elements implement the keyboard interaction defined in the button pattern.

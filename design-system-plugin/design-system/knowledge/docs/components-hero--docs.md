---
storybook_id: components-hero--docs
title: "Components/Hero"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-hero--docs"
import_path: "./src/components/Hero/Hero.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:08:19.765Z
---

# Source: Components/Hero

- Storybook ID: `components-hero--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-hero--docs
- Import path: `./src/components/Hero/Hero.mdx`
- Capture status: `extracted`

# Hero

## The Hero component is used to highlight a specific part of the page.

## Example

Legend of the picture

Icon eyebrow

Icon eyebrow

# Hero title

Hero description on three lines maximum

Legend of the picture

## Anatomy

```
import { Hero, IconName, InputSize, Button, ButtonSize, TextInput } from "@sanofi-accelerator/elements";

const Component = () => (
  <Hero
    floating
    title="Hero title"
    description="Hero description on three lines maximum"
    eyebrows={[
        {
            iconName: IconName.CALENDAR_MONTH,
            text: "Icon eyebrow",
        },
        {
            iconName: IconName.SUPERVISED_USER_CIRCLE,
            text: "Icon eyebrow",
        },
    ]}
    image={{
        src: "https://cdn.prod.accelerator.sanofi/....",
        alt: "Alt text",
        legend: "Legend of the picture",
    }}
    input={
        <TextInput
            aria-label="Email"
            size={InputSize.LARGE}
            type="email"
            placeholder="Placeholder"
        />
    }
    button={
        <Button
            size={ButtonSize.LARGE}
            label="Call to action"
        />
    }
  />
);
```

## API Reference

| Name | Description | Default |
| --- | --- | --- |
| title* | Main heading contentReactNode | - |
| description* | Subheading/description contentReactNode | - |
| floating | Float content card over background edge.boolean | false |
| overlayStyle | Overlay style"default""black""white" | "OverlayStyles.DEFAULT" |
| titleLineClamp | Maximum lines for title before truncation.number"none" | 3 |
| descriptionLineClamp | Maximum lines for description before truncation.number"none" | 3 |
| eyebrows | Eyebrow labels with optional icons{ text: string; iconName?: "error" \| "warning" \| IconName \| "abc" \| "access_time" \| "accessibility" \| "account_balance" \| "account_circle" \| "add" \| "add_circle" \| "add_circle_outline" \| ... 482 more ...; }[] | - |
| image | {
 src: string,
 alt: string,
 legend?: string,
 fallbackSrc?: string,
 sources?:[
  {
    srcSet: string,
    media: string,
    type?: string
  }
 ]
}
HeroImageConfig | - |
| input | Search or form input elementReactNode | - |
| button | Call-to-action button elementReactNode | - |
| justify | Horizontal content alignment."center""start""end" | "HeroJustify.START" |
| fullScreen | Expand Hero to full viewport height.boolean | false |
| fullScreenOffset | Override the auto-detected page insets for fullscreen height calculationFullScreenOffset | - |
| brandTheme | Override the theme at component level"primary""secondary""tertiary" | "BrandTheme.primary" |
| overlayEmphasis | Overlay opacity intensity."strong""ultra_strong" | "OverlayEmphasis.STRONG" |
| variant | Layout variant."default""compact""dynamic" | "HeroVariant.DEFAULT" |
| video | {
 src: string,
 sources?:[
  {
    src: string,
    media: string,
    type?: string
  }
 ],
 muted?: boolean,
 loop?: boolean,
 autoPlay?: boolean,
 poster?: string,
 stopButtonAriaLabel?: string
}
HeroVideoProps | - |

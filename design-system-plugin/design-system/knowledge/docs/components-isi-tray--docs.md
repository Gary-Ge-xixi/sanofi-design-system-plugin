---
storybook_id: components-isi-tray--docs
title: "Components/ISI Tray"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-isi-tray--docs"
import_path: "./src/components/IsiTray/IsiTray.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:08:31.396Z
---

# Source: Components/ISI Tray

- Storybook ID: `components-isi-tray--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-isi-tray--docs
- Import path: `./src/components/IsiTray/IsiTray.mdx`
- Capture status: `extracted`

# ISI Tray

## The ISI Tray is a legal component required especially for any website
targeting the United States market. According to the FDA, “The law requires
that product claim ads give a ‘fair balance’ of information about drug risks
as compared with information about drug benefits. This means that the content
and presentation of a drug’s most important risks must be reasonably similar
to the content and presentation of its benefits.”

## Default Placement and Size

An ISI tray needs to be present at the bottom of the view port, on all pages of the website, to provide fair balance against the
promotional content.
The Responsive ISI tray component is built in such a way that it will always occupy 15% of the view port screen by default, no matter what device you are viewing the website on.

## Collapsible

When the Collapsible Indication & Important Safety Information Tray is open, it will display the headline and a snippet of the body text. When the tray is
closed, it will display only the headline.
“Line count” should not be the sizing directive as there is no way to guarantee a certain line count across the
myriad of devices and screen sizes in market.

## Expandable

When the Collapsible Indication & Important Safety Information is in its default position, it can be either collapsed or expanded. In the last case, the ISI Tray will take the whole content space.
From this point on, the collapse button will only fully collapse, and the expand fully expand.

## Anatomy

The layout prop is optional. If you only provide the firstColumn content, then the layout will be on 12 columns by default. If you provide content for the 2 columns (you want ISI and Indication), the default layout value will be Half meaning that each content section will span on 6 columns. Alternatively, you can, of course, specify the 1/3 or 2/3 layout.

```
import { IsiTray, Title, TitleVariant, Typography, TypographyVariant } from "@sanofi-accelerator/elements";

const Example = () => (
  <IsiTray
      firstColumnHeader="Important Safety Informations"
      firstColumnContent={
        <>
          <Title variant={TitleVariant.TITLE_5}>
            Important Safety Informations
          </Title>
          <Typography variant={TypographyVariant.BODY_MEDIUM}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
          <Typography variant={TypographyVariant.BODY_MEDIUM}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Eligendi ipsa, repellat asperiores dicta laboriosam placeat odit
            quisquam atque doloribus corrupti suscipit officia minima ut
            assumenda mollitia tempore pariatur vitae numquam.
          </Typography>
        </>
      }
    />
);
```

## API Reference

| Name | Description | Default |
| --- | --- | --- |
| titleVariant | Title typography variant"title-1""title-2""title-3""title-4""title-5" | - |
| layout | layout"one-third""two-third""half""full" | "IsiTrayLayout.HALF" |
| containerProps | Container configurationContainerProps | - |
| firstColumnHeader* | First column header contentReactNode | - |
| secondColumnHeader | Second column header contentReactNode | - |
| mobileHeaderLabel | Mobile header label overrideReactNode | - |
| footerContent | Footer content below the columns.ReactNode | - |
| firstColumnContent* | Content for the first (or only) column.ReactNode | - |
| secondColumnContent | Content for the second column (when using split layout).ReactNode | - |
| hideTrayWhenExpanded | Hides the tray bar when content is expanded.boolean | false |
| brandTheme | Override the theme at component level."primary""secondary""tertiary" | "BrandTheme.primary" |
| isiContentSelector | CSS selector for ISI content (for scroll tracking).string | - |
| classNames | CSS class names for component parts.{ isiTrayInPageBody?: string; isiTrayWrapper?: string; isiTrayWrapperExpanded?: string \| undefined; } \| undefined | - |
| shouldHideOnDualColumn | Hides the tray on screens wide enough for dual column.boolean | false |
| titleAs | Element type for title (e.g., "h2", "h3")ElementType | - |
| onClickExpand | Callback when expand button clicked((e: MouseEvent<HTMLButtonElement, MouseEvent>) => void) | - |
| onClickMinimize | Callback when minimize button clicked((e: MouseEvent<HTMLButtonElement, MouseEvent>) => void) | - |

Lorem ipsum dolor sit amet consectetur. Tempus nunc faucibus cursus faucibus quam nam. Dolor habitasse morbi sit odio consequat arcu. Lectus ullamcorper scelerisque consectetur nam porttitor auctor diam. Amet eget vitae libero volutpat commodo gravida faucibus id sed.

Lorem ipsum dolor sit amet consectetur. Blandit cursus feugiat consectetur egestas massa sed nunc. Ullamcorper ultrices facilisi odio ultrices in enim arcu. Elit tempus et dapibus velit viverra et. Sed amet morbi lobortis aliquet risus id malesuada mattis volutpat. Enim adipiscing nisl quam leo nam tincidunt feugiat. Eget in et ac fringilla. Quis nec amet morbi netus aliquam a et. Ultricies quis blandit nullam duis libero ut tristique dolor vitae.

Posuere sed turpis a scelerisque scelerisque. Consectetur eget mattis magna scelerisque vitae. Scelerisque arcu magna nec tortor fringilla egestas. Eget quis duis placerat donec quam amet sit mus leo. Imperdiet dolor viverra pellentesque diam nunc elit viverra magna sed. Nec pellentesque est morbi commodo metus in.

Condimentum quis tellus est maecenas id non. Fringilla ut id sit mattis pellentesque varius. Massa bibendum velit lectus vitae. Lorem id sit at sed amet bibendum id feugiat pellentesque.

Euismod feugiat tellus rhoncus viverra placerat congue risus. Sem felis quisque proin viverra. Nunc vitae ut tempor fermentum aenean elementum tellus morbi. Pharetra vulputate elementum amet sit eget euismod sed elit. Pharetra eget quis nunc nam ut eleifend. Tortor id commodo nulla porttitor adipiscing vulputate congue arcu sed. Dui in facilisi consequat eget sapien nisi.

FOOTER CONTENT

Lorem ipsum dolor sit amet consectetur. Tempus nunc faucibus cursus faucibus quam nam. Dolor habitasse morbi sit odio consequat arcu. Lectus ullamcorper scelerisque consectetur nam porttitor auctor diam. Amet eget vitae libero volutpat commodo gravida faucibus id sed.

---
storybook_id: components-video-thumbnail--docs
title: "Components/Video Thumbnail"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-video-thumbnail--docs"
import_path: "./src/components/VideoThumbnail/VideoThumbnail.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:11:44.270Z
---

# Source: Components/Video Thumbnail

- Storybook ID: `components-video-thumbnail--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-video-thumbnail--docs
- Import path: `./src/components/VideoThumbnail/VideoThumbnail.mdx`
- Capture status: `extracted`

# Video Thumbnail

## Video thumbnails are preview images representing video content. They provide
users with a visual preview of the video and serve as interactive elements to
initiate video playback.

## Example

### Medical lead Paul Rowe trained to be a surgeon, but realized he could help more people in the world if he pursued a career in industry.

## Anatomy

```
import { VideoThumbnail } from "@sanofi-accelerator/elements";

const Component = () => (
  <VideoThumbnail
    videoUrl={"https://www.youtube.com/embed/8u1qiZMJKfc?si=XmKwMUbjPJpPtSsW"}
    imageUrl={"https://cdn.prod.accelerator.sanofi/elements/images/cards-mediasanofi.webp"}
    title={"Medical lead Paul Rowe trained to be a surgeon, but realized he could help more people in the world if he pursued a career in industry."}
    withEmbeddedPlayer={true}
  />
);
```

## API Reference

### VideoThumbnail

| Name | Description | Default |
| --- | --- | --- |
| onClick | Callback fired when thumbnail is clicked.((event?: MouseEvent) => void) | - |
| disabled | Disables interaction with the thumbnail.boolean | false |
| withEmbeddedPlayer | The video player is embedded or notboolean | true |
| videoUrl | The video urlstring | - |
| size | Explicit dimensions for the thumbnail.Size | - |
| titleSize | The title sizestring | - |
| title | The video titleReactNode | - |
| imageUrl | Thumbnail image URL displayed before video plays.string | - |
| alt | Alt text for the thumbnail image (accessibility).string | "" |
| captions | Caption/subtitle file URLs keyed by ISO 639 language code.VideoCaptionUrls | - |
| brandTheme | Override the theme at component level."primary""secondary""tertiary" | "BrandTheme.primary" |
| onLoadedMetadata | Callback fired when video metadata is loaded.ReactEventHandler<HTMLVideoElement> | - |
| isPrivacyEnhancedMode | Uses YouTube's privacy-enhanced mode (youtube-nocookie.com).boolean | true |

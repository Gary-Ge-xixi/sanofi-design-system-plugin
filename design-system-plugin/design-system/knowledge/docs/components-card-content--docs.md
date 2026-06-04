---
storybook_id: components-card-content--docs
title: "Components/Card/Content"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-card-content--docs"
import_path: "./src/components/Card/CardContent.stories.tsx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:06:17.059Z
---

# Source: Components/Card/Content

- Storybook ID: `components-card-content--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-card-content--docs
- Import path: `./src/components/Card/CardContent.stories.tsx`
- Capture status: `extracted`

# Content

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| category | Category label displayed above title (e.g., "Technology", "News")string | - |  |
| date | The card datestring | - | dateDateTime |
| eyebrowComponent | Custom eyebrow component (overrides category/date)ReactNode | - |  |
| title | Card title - use Title component for proper stylingReactNode | - |  |
| tags | Tag elements displayed under the titleReactNode | - |  |
| secondaryEyebrows | Optional second eyebrow row displayed under tagsEyebrow[] | - |  |
| withDivider | Shows a divider line between title and contentboolean | - |  |
| subText | Description or summary text below the titleReactNode | - |  |
| buttonSlot | Slot for action button in content areaReactNode | - |  |
| children | Additional content (links, tags, etc.)ReactNode | - |  |
| isCentered | Centers all content horizontallyboolean | false |  |
| classnames | Custom CSS classes for content elements{ subtext?: string; title?: string; } \| undefined | - |  |
| showFullContent | Shows full content without truncationboolean | false |  |

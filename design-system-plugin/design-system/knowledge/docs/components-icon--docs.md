---
storybook_id: components-icon--docs
title: "Components/Icon"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-icon--docs"
import_path: "./src/components/Icon/Icon.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:08:23.761Z
---

# Source: Components/Icon

- Storybook ID: `components-icon--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-icon--docs
- Import path: `./src/components/Icon/Icon.mdx`
- Capture status: `extracted`

# Icon Component

## The Icon component is a versatile and customizable UI element for displaying
icons. It supports various sizes, filled/outlined variants, inverse color
styling for dark backgrounds, and integrates seamlessly with different UI
contexts. This component uses Google Material Symbols &
Icons and custom social icons.

## Icon Gallery

Browse all available icons with search, filtering by category, and copy-to-clipboard functionality.

All Icons (454)

Actions (57)

Activities (8)

Android (7)

Audio&Video (21)

Business (25)

Communicate (22)

Hardware (16)

Home (1)

Household (4)

Images (24)

Maps (14)

Privacy (3)

Social (26)

Text (100)

Transit (1)

Travel (1)

UI actions (108)

Social Icons (16)

Filled

Size: 1.5rem

Showing 50 of 454 icons

Last updated: 1/13/2026

abc

accessibility

account_balance

account_circle

add

add_circle

add_comment

add_link

add_photo_alternate

add_shopping_cart

admin_panel_settings

alarm

align_horizontal_center

align_horizontal_left

align_horizontal_right

align_vertical_bottom

align_vertical_center

align_vertical_top

analytics

apartment

api

approval

apps

archive

arrow_back

arrow_back_ios

arrow_downward

arrow_drop_down

arrow_drop_up

arrow_forward

arrow_forward_ios

arrow_left

arrow_left_alt

arrow_outward

arrow_right

arrow_right_alt

arrow_selector_tool

arrow_upward

article

assignment_late

assistant_direction

attach_file

attach_money

attachment

autorenew

av_timer

avg_pace

bar_chart

bedtime

biotech

Page

of 10

## Usage

```
import { Icon, IconName } from "@sanofi-accelerator/elements";

// Basic usage

<Icon name={IconName.SEARCH} />

// With size

<Icon name={IconName.HOME} size={2} />

// Outlined variant

<Icon name={IconName.FAVORITE} filled={false} />

// Inverse for dark backgrounds

<Icon name={IconName.SETTINGS} inverse />

// Social icon

<Icon name={IconName.ELEMENTS_FACEBOOK} />
```

## Icon Categories

Icons are organized into the following categories:

| Category | Description | Examples |
| --- | --- | --- |
| Action | Common actions and operations | search, home, settings, delete |
| Navigation | Directional and navigation | arrow_back, menu, chevron_right |
| Communication | Messaging and contact icons | chat, mail, phone, forum |
| Content | Content manipulation | add, remove, copy, paste |
| Editor | Text and document editing | format_bold, attach_file |
| Alert | Notifications and warnings | warning, error, notification_important |
| File | Files and folders | folder, cloud, download, upload |
| Hardware | Devices and hardware | computer, phone_android, keyboard |
| Social | Social media brand icons | elements_facebook, elements_instagram |
| Custom | Sanofi-specific custom icons | home_health_unread |

## Custom Icons

Custom icons are Sanofi-specific icons that extend the Material Symbols set. Unlike social icons, custom icons support full CSS styling including color changes.

### Styling Custom Icons

Custom icons are rendered using CSS masks, which means they inherit and respond to the color property:

```
import { Icon, IconNameCustom } from "@sanofi-accelerator/elements";

// Default color (inherits from parent)
<Icon name={IconNameCustom.HOME_HEALTH_UNREAD} />

// Custom color via style prop
<Icon
  name={IconNameCustom.HOME_HEALTH_UNREAD}
  style={{ color: "var(--elements-color-semantic-accent-default)" }}
/>

// Custom color via CSS class
<Icon name={IconNameCustom.HOME_HEALTH_UNREAD} className="my-icon-class" />
```

### Adding New Custom Icons

Prerequisites: Custom icons must be uploaded to the CDN before they can be used in the design system.

Process:

1. Open a Pull Request to the platform-cdn repository
2. Add your SVG file to the elements/icons folder
3. Request approval from the Elements design system team
4. Once merged and deployed, the icon will be available at: https://cdn.prod.accelerator.sanofi/elements/icons/your-icon-name.svg
5. Add the icon name to IconNameCustom enum in the design system

Note: This CDN upload process is a prerequisite for adding and using any custom icon in the design system.

### Technical Details

Custom icons are rendered differently from Material Symbols icons:

- Material Symbols: Rendered as font icons (inline text)
- Social Icons: Rendered as <img> tags (cannot be styled with color)
- Custom Icons: Rendered with CSS mask (fully stylable with color)

## Accessibility

- Always provide meaningful aria-label for interactive icons
- Use aria-hidden for decorative icons that don't convey meaning

```
// Interactive icon - needs aria-label
<button aria-label="Search">
  <Icon name={IconName.SEARCH} aria-hidden />
</button>

// Decorative icon - hidden from screen readers
<Icon name={IconName.STAR} aria-hidden />
```

## Sizing Guidelines

| Context | Recommended Size | Use Case |
| --- | --- | --- |
| Inline with text | 1rem | Within paragraphs |
| Buttons | 1.25rem | Icon buttons, actions |
| Navigation | 1.5rem | Menu items, nav bars |
| Cards | 2rem | Card icons |
| Hero sections | 3rem+ | Feature highlights |

## API Reference

| Name | Description | Default |
| --- | --- | --- |
| name* | The icon name"error""warning"IconName"abc""access_time""accessibility""account_balance""account_circle""add""add_circle""add_circle_outline""add_comment"... 482 more ...IconNameCustomShow 6 more... | - |
| size | The icon size in remnumber | 1.5 |
| inverse | The inverse color iconboolean | - |
| filled | Should the icon be filledboolean | true |
| className | string | - |
| aria-hidden | Indicates whether the element is exposed to an accessibility API.Booleanish | - |
| onClick | MouseEventHandler<HTMLSpanElement> | - |
| inputSize | "small""medium""large" | - |

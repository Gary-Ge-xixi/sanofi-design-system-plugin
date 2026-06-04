---
storybook_id: components-avatar--docs
title: "Components/Avatar"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-avatar--docs"
import_path: "./src/components/Avatar/Avatar.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:05:41.306Z
---

# Source: Components/Avatar

- Storybook ID: `components-avatar--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-avatar--docs
- Import path: `./src/components/Avatar/Avatar.mdx`
- Capture status: `extracted`

# Avatar

## Avatar is a visual representation of a user or entity, often displaying a
profile image or initials letters. It adds a personal touch to interfaces,
fostering recognition and enhancing the overall experience in interfaces. If
the user haven't uploaded an image, the avatar will use a default one.

### Interactivity

If you want a static avatar, without hover, focus and any interaction, you just have to not pass the onClick prop.

## Default with image

Here, you can see all the available sizes for the Avatar component. By default, it uses the medium one.

```
import { Avatar } from "@sanofi-accelerator/elements";

export default () => (
<Avatar
  image="https://cdn.prod.accelerator.sanofi/elements/images/Marie-Curie-avatar.jpeg"
  name="Marie Curie" />
  onClick={(e) => {
	alert('Avatar clicked');
	console.log(e);
}}
);
```

## Example only with name

```
import { Avatar } from "@sanofi-accelerator/elements";

export default () => (
<Avatar name="Marie Curie" />
);
```

If the image prop is not supplied, the Text version of the Avatar with the initials (name/surname) are used as a fallback.

MC

MC

## Icon Avatar

If the name and image props are missing, the default user icon version is displayed in the Avatar.

```
import { Avatar } from "@sanofi-accelerator/elements";

export default () => (
<Avatar />
);
```

## Example with label

If the label prop is provided, the Avatar will show the name and label under, or on the right, depending on the size.

```
import { Avatar } from "@sanofi-accelerator/elements";

export default () => (
<Avatar
  image="https://cdn.prod.accelerator.sanofi/elements/images/Marie-Curie-avatar.jpeg"
  name="Marie Curie"
  label="marie.curie@sanofi.com" />
);
```

## API Reference

| Name | Description | Default |
| --- | --- | --- |
| name | User's full name. Used for:Generating initials when no image is providedAccessible alt text for the imageDisplay text when isNameVisible is truestring | - |
| image | URL of the user's profile image.
When not provided, displays initials from name.string | - |
| label | Secondary text displayed below the name (e.g., job title, role).
Only visible when isDescriptionVisible is true.string | - |
| size | Size variant of the avatar."x-small""small""medium""large""x-large""xx-large" | "AvatarSize.MEDIUM" |
| isDescriptionVisible | Shows the label text below the avatar.boolean | true |
| isNameVisible | Shows the name text next to the avatar.boolean | true |
| isCounter | Renders as a counter badge (e.g., "+5" for overflow).
Used internally by AvatarGroup for showing remaining count.boolean | false |
| brandTheme | Override the theme at component level."primary""secondary""tertiary" | "BrandTheme.primary" |
| onClick | Click handler that makes the avatar interactive.
When provided, the avatar becomes focusable and clickable.MouseEventHandler<HTMLDivElement> | - |
| className | Additional CSS class for the avatar container.string | - |

---
storybook_id: components-avatar-avatargroup--docs
title: "Components/Avatar/AvatarGroup"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-avatar-avatargroup--docs"
import_path: "./src/components/AvatarGroup/AvatarGroup.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:05:37.230Z
---

# Source: Components/Avatar/AvatarGroup

- Storybook ID: `components-avatar-avatargroup--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-avatar-avatargroup--docs
- Import path: `./src/components/AvatarGroup/AvatarGroup.mdx`
- Capture status: `extracted`

# AvatarGroup

## AvatarGroup is a component that displays multiple avatars in a compact,
visually appealing arrangement. It's designed to represent a collection of
users or entities, often used in collaborative interfaces or team displays.
AvatarGroup efficiently manages space by slightly overlapping individual
avatars and provides an option to show a count of additional members when the
number of avatars exceeds a specified limit (currently set to 4 + the
counter).

## Basic usage

You simply need to pass the avatarSize prop to the AvatarGroup component.
It is the only required prop and you don't need to set a size for every single Avatar inside the AvatarGroup, unless you used a tooltip.

```
import { Avatar, AvatarGroup, AvatarSize } from "@sanofi-accelerator/elements";

export default () => (
<AvatarGroup avatarSize={AvatarSize.XLARGE}> // All the children avatars will be of size XLARGE
  <Avatar
    image="https://cdn.prod.accelerator.sanofi/elements/images/Marie-Curie-avatar.jpeg"
    name="Marie Curie" />
  <Avatar
    name="John Doe" />
</AvatarGroup>
);
```

## Example with counter

```
import { Avatar, AvatarGroup, AvatarSize } from "@sanofi-accelerator/elements";

export default () => (
<AvatarGroup avatarSize={AvatarSize.XLARGE}>
  <Avatar name="Marie Curie" />
  <Avatar name="Alan Turing" />
  <Avatar name="Rosalind Franklin" />
  <Avatar name="Nikola Tesla" />
  <Avatar name="Ada Lovelace" />
  <Avatar name="Albert Einstein" />
  <Avatar name="Grace Hopper" />
</AvatarGroup>
);
```

## API Reference

| Name | Description | Default |
| --- | --- | --- |
| className | Additional CSS class.string | - |
| children | Avatar components to display.ReactNode | - |
| avatarSize* | Avatar size"x-small""small""medium""large""x-large""xx-large" | - |
| maxDisplay | Maximum avatars to show before counter.
Remaining avatars show as "+N" counter.number | 4 |
| onCounterClick | Callback when overflow counter is clicked.MouseEventHandler<HTMLDivElement> | - |

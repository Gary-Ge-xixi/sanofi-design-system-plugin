---
storybook_id: components-modal--docs
title: "Components/Modal"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-modal--docs"
import_path: "./src/components/Modal/Modal.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:09:25.062Z
---

# Source: Components/Modal

- Storybook ID: `components-modal--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-modal--docs
- Import path: `./src/components/Modal/Modal.mdx`
- Capture status: `extracted`

# Modal

## A modal dialog is a dialog that appears on top of the user’s main content. This dialog is disruptive for the user workflow, as it puts the interface in a special mode, requiring interaction and attention.It disables the main content until the user explicitly interacts with the modal dialog. To emphasize on the interruption, it is used with a background overlay.

## Example

This example shows a modal with content. It has a title, subtitle, text content, slot content which can be a video or an image and a footer content. The bottom section can be customised using the footerContent prop.

##### Modal Title

Modal Subtitle

This is a dedicated placeholder for optional text, serving as modal content. This placeholder has no limit on content, but it should adapt to the modal maximum height.

## Anatomy

```
import { Modal, VideoThumbnail, Button, ButtonVariant } from "@sanofi-accelerator/elements";
import { useState, useCallback } from "react";

export const MyComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const closeModal = useCallback(() => {
    setIsVisible(false);
  }, []);

  const footerContent = (
    <>
      <Button
        label="Cancel"
        variant={ButtonVariant.TERTIARY}
        onClick={() => closeModal()}
      />
      <Button
        label="Confirm"
        onClick={() => alert("The onClick props is called.")}
      />
    </>
  );

  <Modal
    title='Modal title'
    subtitle='Modal subtitle'
    textContent='This is a dedicated placeholder for optional text, serving as modal content. This placeholder has no limit on content, but it should adapt to the modal maximum height. This maximum height can be set by the designers, depending on the need. But the modal must always have a minimum margin on top and bottom of 96px. This is a dedicated placeholder for optional text, serving as modal content. This placeholder has no limit on content, but it should adapt to the modal maximum height. This maximum height can be set by the designers, depending on the need. But the modal must always have a minimum margin on top and bottom of 96px.'
    slotContent=(
      <VideoThumbnail
      videoUrl="https://www.youtube.com/embed/8u1qiZMJKfc?si=XmKwMUbjPJpPtSsW"
      imageUrl="https://cdn.prod.accelerator.sanofi/elements/images/cards-mediasanofi.webp"
      />
      )
    footerContent={footerContent}
    isClosable={true}
    isVisible={isVisible}
    onClose={() => closeModal()}
  />

};
```

## Non dismissible modal

A modal can either be dismissible or non dismissible. Non-dismissible modals can't be closed unless you click one of the action buttons at the bottom.

##### Non Dismissible Modal

Modal Subtitle

This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.

## Anatomy

```
import { Modal, VideoThumbnail, Button, ButtonVariant } from "@sanofi-accelerator/elements";
import { useState } from "react";

export const MyComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  const footerContent = (
    <>
      <Button
        label="Cancel"
        variant={ButtonVariant.TERTIARY}
        onClick={() => {
          setIsVisible(false);
        }}
      />
      <Button
        label="Confirm"
        onClick={() => alert("The onClick props is called.")}
      />
    </>
  );

  <Modal
    title='Non dismissible modal'
    subtitle='Modal Subtitle'
    textContent='This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.'
    footerContent={footerContent}
    isClosable={false}
    isVisible={isVisible}
  />

};
```

## API Reference

### Modal

| Name | Description | Default |
| --- | --- | --- |
| title | Title text displayed in the modal header.string | - |
| subtitle | Subtitle text displayed below the title.string | - |
| textContent | Simple text content for the modal body.
Use slotContent for complex content.string | - |
| slotContent | Custom React content for the modal body.
Use for complex content (forms, lists, etc.).
Takes precedence over textContent.ReactNode | - |
| size | Custom dimensions for the modal.{ height?: string; width?: string; } \| undefined | - |
| isVisible | Whether the modal is visible or notboolean | false |
| isClosable | Whether the modal can be closed by clicking outside of itboolean | true |
| onClose | function | - |
| footerContent | Custom React content for the modal footer.
Typically contains action buttons.ReactNode | - |
| disableAnimation | Disables open/close animations.boolean | false |
| icon | Icon displayed before the title in the modal headerReactNode | - |
| hasOverlay | Whether the modal has an overlayboolean | true |
| brandTheme | Override the theme at component level."primary""secondary""tertiary" | "BrandTheme.primary" |
| classNames | Custom CSS classes for modal sections.
Allows styling individual parts of the modal.{ container?: string; header?: string; headerContent?: string \| undefined; content?: string \| undefined; footer?: string \| undefined; footerContent?: string \| undefined; overlay?: string \| undefined; } \| undefined | - |

## Accessibility

### Keyboard interactions

The Modal component implements a focus trap to ensure proper keyboard navigation and accessibility:

- Focus Trap: When the modal opens, keyboard focus is automatically trapped inside the modal. Pressing Tab cycles forward through all focusable elements (buttons, links, inputs, etc.), and when reaching the last element, focus loops back to the first. Pressing Shift+Tab cycles backwards.
- Automatic Focus Management: Focus is automatically moved to the first focusable element (typically the close button) when the modal opens.
- Escape Key: The modal can be dismissed by pressing the ESC key. This behavior respects the isClosable prop - if isClosable is false, the Escape key will not close the modal.
- Focus Restoration: When the modal closes, focus is automatically restored to the element that was focused before the modal opened.
- Backdrop: The modal includes an overlay backdrop that prevents interaction with elements outside the modal.

The focus trap is implemented using the useFocusTrap hook, which provides consistent behavior across all browsers and assistive technologies.

## Warning when testing Modal

jsdom still doesn't fully support the HTMLDialogElement used by the Modal component.
To avoid issues in your tests, use the provided mock helper:

```
import { mockHTMLDialogElement } from "@sanofi-accelerator/elements/test/mockHTMLDialogElement";

beforeAll(() => {
  mockHTMLDialogElement();
});
```

Or manually mock the methods:

```
beforeAll(() => {
  HTMLDialogElement.prototype.show = vi.fn().mockImplementation(function (
    this: HTMLDialogElement
  ) {
    this.open = true;
  });
  HTMLDialogElement.prototype.showModal = vi.fn().mockImplementation(function (
    this: HTMLDialogElement
  ) {
    this.open = true;
  });
  HTMLDialogElement.prototype.close = vi.fn().mockImplementation(function (
    this: HTMLDialogElement
  ) {
    this.open = false;
  });
});
```

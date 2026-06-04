---
storybook_id: components-drawer--docs
title: "Components/Drawer"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-drawer--docs"
import_path: "./src/components/Drawer/Drawer.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:07:46.802Z
---

# Source: Components/Drawer

- Storybook ID: `components-drawer--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-drawer--docs
- Import path: `./src/components/Drawer/Drawer.mdx`
- Capture status: `extracted`

# Drawer

## A drawer dialog is a dialog that appears on top of the user’s main content. This dialog is disruptive for the user workflow, as it puts the interface in a special mode, requiring interaction and attention.It disables the main content until the user explicitly interacts with the drawer dialog. To emphasize on the interruption, it is used with a background overlay.

## Example

This examples shows a drawer with content. It has a title, subtitle, content, and footer content. The content can be any ReactNode, in this cased we used a video. The bottom section can be customised using the footerContent prop.

This Drawer can be dismissed by clicking on the close button and/or an action. The focus is redirected to the drawer but the remaining interface elements can still be focusable by going back.

Search fruits (Optional)

## Non dismissible drawer

This examples shows a drawer with content. It has a title, subtitle, content, and footer content. The content can be any ReactNode, in this cased we used a video. The bottom section can be customised using the footerContent prop.

This Drawer can be dismissed by clicking on the close button and/or an action. The focus is redirected to the drawer but the remaining interface elements can still be focusable by going back.

Search fruits (Optional)

## Custom Dimensions

### Custom Content Height

Customize the content area height for top/bottom positioned drawers using the maxContentHeight prop.

This story demonstrates the new maxContentHeight prop that allows users to customize the content area height for top/bottom drawers.

Try different height values to see the difference. Perfect for mobile optimization.

Current maxContentHeight: 70vh

This drawer's content area height is now customizable.• Default: ~96px• Current: 70vh• Perfect for mobile: 70vh-80vh

Sample Form Content:

Benefits of Custom Height:

• ✅ No more unnecessary scrollbars on mobile

• ✅ Content fits better on different screen sizes

• ✅ Better user experience for forms and lists

• ✅ Flexible: Use vh, px, %, or any CSS unit

Notice how this content area can now accommodate much more content without forcing scrollbars, especially on mobile devices where the default 96px height was too restrictive.

### Custom Drawer Width

Customize the drawer width for start/end positioned drawers using the customDrawerWidth prop.

This story demonstrates the new customDrawerWidth prop that allows users to customize the width for start/end positioned drawers.

Try different width values to see the difference. Perfect for content-specific layouts!

💡 Mobile Behavior: All custom widths become 100% on mobile devices for optimal touch experience.

Current customDrawerWidth: 500px

✅ Start/End drawer width is now customizable!• Default: Based on size prop (22.5rem, 30rem, 37.5rem, 90%)• Current: 500px• Perfect for content-specific layouts

Sample Content:

Benefits of Custom Width:

• ✅ Perfect width for your specific content

• ✅ Responsive: Always 100% on mobile

• ✅ Flexible: Use px, vw, %, rem, or any CSS unit

• ✅ Fallback: Uses size prop when not specified

Notice how this drawer can be precisely sized for your content needs. On mobile, it automatically becomes full-width for optimal experience.

💡 Position Independence: This feature only works for start/end positioned drawers. Top/bottom drawers use the maxContentHeight prop instead.

### Usage Examples

```
// Height control for top/bottom drawers
<Drawer
drawerTitle="Mobile Friendly"
position="bottom"
maxContentHeight="70vh"  // 70% of viewport height
isVisible={isVisible}
content={<FormWithManyFields />}
/>

// Width control for start/end drawers
<Drawer
drawerTitle="Custom Width Drawer"
position="end"
customDrawerWidth="500px"  // Exactly 500 pixels wide
isVisible={isVisible}
content={<SidebarContent />}
/>

// Responsive width using viewport units
<Drawer
drawerTitle="Responsive Drawer"
position="start"
customDrawerWidth="40vw"  // 40% of viewport width
isVisible={isVisible}
content={<NavigationMenu />}
/>

// Use default behavior (size prop based)
<Drawer
drawerTitle="Default"
position="end"
size="medium"  // Uses default medium width (30rem)
isVisible={isVisible}
content={<StandardContent />}
/>

// Hide footer when needed
<Drawer
position="end"
showFooter={false}
isVisible={isVisible}
content={<StandardContent />}
/>
```

## Anatomy

```
import { Drawer, Button, ButtonVariant } from "@sanofi-accelerator/elements";
import { useState } from "react";

export const MyComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  const footerContent = (
    <>
      <Button
        label='Cancel'
        variant={ButtonVariant.TERTIARY}
        onClick={() => {
          alert('Cancel action');
        }}
      />
      <Button label='Confirm' onClick={() => alert('Confirm action')} />
    </>
  );

  <Drawer
    drawerTitle='Non dismissible drawer'
    textContent='This drawer cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.'
    footerContent={footerContent}
    isClosable={false}
    isVisible={isVisible}
  />

};
```

## API Reference

### Drawer

| Name | Description | Default |
| --- | --- | --- |
| drawerTitle | Title content displayed in the drawer header.
Can be a string or React node for custom formatting.ReactNode | - |
| position | The position of the drawer"start""end""top""bottom" | "DrawerPosition.START" |
| size | The size of the drawer"small""medium""large""full" | "DrawerSize.SMALL" |
| isVisible | Whether the drawer is visible or notboolean | false |
| hasOverlay | Whether the drawer has an overlay or notboolean | true |
| backButtonCallback | Callback fired when the back button is clicked.
Only used when showBackButton is true.(() => void) | - |
| isClosable | Shows a close button in the header.boolean | true |
| showBackButton | Whether to show the back button or notboolean | false |
| content | Main content of the drawer body.ReactNode \| ReactNode[] | - |
| footerContent | Content displayed in the drawer footer.
Typically contains action buttons.ReactNode | - |
| showFooter | Whether to render the drawer footerboolean | true |
| withContainer | Wraps content in a Container component for consistent padding.boolean | true |
| onClose | Callback fired when the drawer should close.
Triggered by close button, overlay click, or Escape key.(() => void) | - |
| brandTheme | Override the theme at component level."primary""secondary""tertiary" | "BrandTheme.primary" |
| maxContentHeight | Custom max height for drawer content area (e.g., '80vh', '500px')string | - |
| customDrawerWidth | Custom width for start/end positioned drawers (e.g., '400px', '50vw')string | - |

## Accessibility

### Keyboard interactions

When a drawer is open, focus moves automatically to the drawer container. While the drawer is open, keyboard focus doesn't leave the drawer. Drawer can be dismissed on keyboard by pressing the ESC key, or focusing and actioning any escaping button like the one on the top right. When the drawer is dismissed, the global focus returns to the button that triggered it.

## Warning when testing Drawer

jsdom stil doesn't support the HTMLDialogElement used under the hood by the Drawer.
To avoid this issue you have to mock the HTMLDialogElement in your test file.

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

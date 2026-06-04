---
storybook_id: components-toast--docs
title: "Components/Toast"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-toast--docs"
import_path: "./src/components/Toast/Toast.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:11:12.742Z
---

# Source: Components/Toast

- Storybook ID: `components-toast--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-toast--docs
- Import path: `./src/components/Toast/Toast.mdx`
- Capture status: `extracted`

# Toast

## The toast component is used to give feedback to users after an action has
taken place.

## Example

## Usage

Import the <Toast /> component, and render it in your component tree.
Call the createToast function to display a Toast:

```
import { createToast, Button } from "@sanofi-accelerator/elements";

export default () => {
const notify = () => {
  createToast({
    title: 'A Toast was successfully created.',
    variant: 'success'
  })
}

return (
  <>
    <Toast />
    <Button onClick={notify} label="Notify" />
  </>
);
}
```

### With actions

The toast can display one or two action buttons

#### Single action

```
import { createToast } from "@sanofi-accelerator/elements";

createToast({
title: 'Toast title',
variant: 'success'
actions: [{ label: 'Confirm', onClick: (evt, closeToast) => {...} }]
})
```

#### Dual action

```
import { createToast } from "@sanofi-accelerator/elements";

createToast({
title: 'Toast title',
variant: 'success'
actions: [
{ label: 'Confirm', onClick: (evt, closeToast) => {...} },
{ label: 'Dismiss', onClick: (evt, closeToast) => {...} }
]
})
```

### Close toast callback

The onClick method on actions prop exposes a closeToast method that can be called to close the current Toast

## API Reference

| Name | Description | Default |
| --- | --- | --- |
| title | Title of the Toaststring | - |
| text | Subtitle of the Toaststring | - |
| variant | Variant- | - |
| displayCloseButton | Display Close buttonboolean | - |
| position | Position- | - |
| duration | Duration of the Toast. Set to Infinite to make a non-dismissible Toast- | - |
| actions | Display one or two actions on the Toast- | - |
| offset | Offset for the Toast- |  |

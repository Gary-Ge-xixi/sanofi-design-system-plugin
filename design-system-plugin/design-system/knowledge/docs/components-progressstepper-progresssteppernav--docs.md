---
storybook_id: components-progressstepper-progresssteppernav--docs
title: "Components/ProgressStepper/ProgressStepperNav"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-progressstepper-progresssteppernav--docs"
import_path: "./src/components/ProgressStepper/ProgressStepperNav.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:10:06.925Z
---

# Source: Components/ProgressStepper/ProgressStepperNav

- Storybook ID: `components-progressstepper-progresssteppernav--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-progressstepper-progresssteppernav--docs
- Import path: `./src/components/ProgressStepper/ProgressStepperNav.mdx`
- Capture status: `extracted`

# ProgressStepperNav

## The ProgressStepperNav component displays a visual navigation for multi-step processes. It shows progress through a series of steps and allows users to navigate between steps by clicking on them.

## Example

## Anatomy

The ProgressStepperNav component requires a provider setup using defineStepper and must be used in conjunction with the useStepper hook.

```
import { ProgressStepperNav, defineStepper, ProgressStepperNavVariation } from "@sanofi-accelerator/elements";

const steps = [
{ id: "account", label: "Account", description: "Create your account" },
{ id: "profile", label: "Profile", description: "Complete your profile" },
{ id: "preferences", label: "Preferences", description: "Set your preferences" },
{ id: "review", label: "Review", description: "Review and confirm" },
] as const;

const StepperProvider = defineStepper(steps);

export default () => (
<StepperProvider>
  <ProgressStepperNav variation={ProgressStepperNavVariation.HORIZONTAL} />
</StepperProvider>
);
```

## Setup

To use the ProgressStepperNav component, you need to:

1. Define your steps array with unique IDs, labels, and optional descriptions
2. Create a provider using defineStepper
3. Wrap your application or component tree with the provider
4. Render the ProgressStepperNav component inside the provider

```
import { ProgressStepperNav, defineStepper } from "@sanofi-accelerator/elements";

// Step 1: Define your steps
const steps = [
{ id: "step1", label: "Getting Started", description: "Welcome" },
{ id: "step2", label: "Configuration", description: "Set up preferences" },
{ id: "step3", label: "Complete", description: "Finish setup" },
] as const;

// Step 2: Create the provider
const StepperProvider = defineStepper(steps);

// Step 3 & 4: Use the provider and component
function MyApp() {
return (

<StepperProvider initialStep="step1">
<ProgressStepperNav />
{/* Your step content here */}
</StepperProvider>
); }
```

## With Initial Step

You can specify an initial step by passing the initialStep prop to the provider:

```
<StepperProvider initialStep="preferences">
<ProgressStepperNav />
</StepperProvider>
```

## Visual States

The ProgressStepperNav automatically displays three visual states for each step:

- Completed: Steps before the current step show a checkmark (✓)
- Active: The current step is highlighted with an active state
- Upcoming: Steps after the current step show their step number

These states are managed automatically based on the current step position.

## Navigation Control

The ProgressStepperNav supports two modes of navigation through the allowNavigation prop:

### Interactive Mode (Default)

By default, allowNavigation is set to true, allowing users to click on any step to navigate directly to it. This is useful for non-linear workflows where users can freely move between steps.

```
<ProgressStepperNav allowNavigation={true} />
```

### Read-Only Mode

When allowNavigation is set to false, the stepper becomes read-only. Users cannot click on steps to navigate - the stepper only displays progress. Navigation must be controlled programmatically using the next, previous, or goTo methods from the useStepper hook.

```
import { ProgressStepperNav, useStepper } from "@sanofi-accelerator/elements";

function MyStepperComponent() {
const { next, previous } = useStepper();

return (
  <>
    <ProgressStepperNav allowNavigation={false} />
    <button onClick={previous}>Previous</button>
    <button onClick={next}>Next</button>
  </>
);
}
```

This mode is ideal for linear workflows where users must complete steps in a specific order and cannot skip ahead.

## Accessibility

The component renders as a semantic <nav> element with clickable buttons for each step. Each step button includes:

- The step number or completion checkmark
- The step label
- An optional description

Users can navigate by clicking any step, and the component manages focus and interaction states appropriately.

## API Reference

| Name | Description | Default |
| --- | --- | --- |
| variation | Controls the layout variation of the stepper"horizontal" | horizontal |
| variant | Visual variant for the stepper indicators."brand": Uses accent/brand colors (default)"neutral": Uses neutral black/white colors"neutral""brand" | "brand" |
| allowNavigation | Whether navigation between steps is allowed by user interactionboolean | true |
| className | Additional CSS class names- | - |

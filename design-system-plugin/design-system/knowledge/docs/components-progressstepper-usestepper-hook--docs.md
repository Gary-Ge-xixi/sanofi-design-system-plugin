---
storybook_id: components-progressstepper-usestepper-hook--docs
title: "Components/ProgressStepper/useStepper Hook"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-progressstepper-usestepper-hook--docs"
import_path: "./src/components/ProgressStepper/ProgressStepperHook.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:10:10.567Z
---

# Source: Components/ProgressStepper/useStepper Hook

- Storybook ID: `components-progressstepper-usestepper-hook--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-progressstepper-usestepper-hook--docs
- Import path: `./src/components/ProgressStepper/ProgressStepperHook.mdx`
- Capture status: `extracted`

## The useStepper hook provides access to the stepper state and navigation methods. It must be used within a component wrapped by a StepperProvider created with defineStepper.

## Basic Usage

```
import { useStepper, defineStepper } from "@sanofi-accelerator/elements";

const steps = [
{ id: "step1", label: "First Step" },
{ id: "step2", label: "Second Step" },
{ id: "step3", label: "Third Step" },
] as const;

const StepperProvider = defineStepper(steps);

function MyStepperComponent() {
const { current, next, previous, goTo, steps } = useStepper();

return (

<div>
<h2>Current Step: {current}</h2>
<button onClick={previous}>Previous</button>
<button onClick={next}>Next</button>
</div>
); }

// Must be wrapped with provider
function App() {
return (

<StepperProvider>
<MyStepperComponent />
</StepperProvider>
); }
```

## Hook Return Values

The useStepper hook returns an object with the following properties:

### steps: Step[]

The array of all steps defined in the stepper.

```
const { steps } = useStepper();
console.log(steps);
// [
//   { id: "step1", label: "First Step", description: "..." },
//   { id: "step2", label: "Second Step", description: "..." },
//   ...
// ]
```

### current: string

The ID of the current active step.

```
const { current } = useStepper();
console.log(current); // "step2"
```

### next: () => void

Function to navigate to the next step. Does nothing if already on the last step.

```
const { next } = useStepper();

<button onClick={next}>Next Step</button>
```

### previous: () => void

Function to navigate to the previous step. Does nothing if already on the first step.

```
const { previous } = useStepper();

<button onClick={previous}>Previous Step</button>
```

### goTo: (id: string) => void

Function to navigate to a specific step by its ID. Only navigates if the ID exists in the steps array.

```
const { goTo } = useStepper();

<button onClick={() => goTo("review")}>Skip to Review</button>
```

### when: (stepId: string, render: () => ReactNode) => ReactNode

Conditionally renders content only when the current step matches the provided step ID. This is inspired by the stepperize library API.

```
const { when } = useStepper();

return (

<div>
{when("account", () => (
  <AccountForm />
))}
{when("profile", () => (
  <ProfileForm />
))}
{when("review", () => (
  <ReviewSummary />
))}
</div>
);
```

## Complete Example

```
import { useStepper, defineStepper, ProgressStepperNav } from "@sanofi-accelerator/elements";

const exampleSteps = [
{ id: "account", label: "Account", description: "Create your account" },
{ id: "profile", label: "Profile", description: "Complete your profile" },
{ id: "review", label: "Review", description: "Review and confirm" },
] as const;

const StepperProvider = defineStepper(exampleSteps);

function StepContent() {
const { current, next, previous, when, steps } = useStepper<typeof exampleSteps>();

const currentIndex = steps.findIndex(s => s.id === current);
const currentStep = steps[currentIndex];
const isFirst = currentIndex === 0;
const isLast = currentIndex === steps.length - 1;

return (

<div>
<ProgressStepperNav />

    <div className="step-content">
      <h2>{currentStep.label}</h2>
      <p>{currentStep.description}</p>

      {/* Step-specific content using when() */}
      {when("account", () => <AccountForm />)}
      {when("profile", () => <ProfileForm />)}
      {when("review", () => <ReviewSummary />)}
    </div>

    <div className="navigation">
      <button onClick={previous} disabled={isFirst}>
        Previous
      </button>

      {isLast ? (
        <button onClick={() => handleSubmit()}>
          Submit
        </button>
      ) : (
        <button onClick={next}>
          Next
        </button>
      )}
    </div>
  </div>

);
}

function App() {
return (

<StepperProvider initialStep="account">
<StepContent />
</StepperProvider>
); }
```

## Error Handling

The useStepper hook will throw an error if used outside of a StepperProvider:

```
// ❌ This will throw an error
function BadComponent() {
const { current } = useStepper(); // Error: useStepper must be used within a StepperProvider
return <div>{current}</div>;
}

// ✅ This is correct
function GoodComponent() {
const { current } = useStepper();
return <div>{current}</div>;
}

const StepperProvider = defineStepper(steps);

function App() {
return (

<StepperProvider>
<GoodComponent />
</StepperProvider>
); }
```

## Using when() for Conditional Rendering

The when function provides a clean, declarative way to render step-specific content:

```
const { when } = useStepper();

// Simple usage
return (

<div>
{when("step1", () => (
  <Step1Content />
))}
{when("step2", () => (
  <Step2Content />
))}
{when("step3", () => (
  <Step3Content />
))}
</div>
);

// With inline JSX
return (

<div>
{when("account", () => (
  <div>
    <h2>Account Setup</h2>
    <AccountForm />
  </div>
))}
{when("profile", () => (
  <div>
    <h2>Profile Information</h2>
    <ProfileForm />
  </div>
))}
</div>
);

// Alternative: Traditional conditional rendering
const { current } = useStepper();
return (

<div>
{current === "step1" && <Step1Content />}
{current === "step2" && <Step2Content />}
</div>
);
```

## Type Definitions

```
interface Step {
id: string;
label: string;
description?: string;
}

interface StepperState {
steps: Step[];
current: string;
next: () => void;
previous: () => void;
goTo: (id: string) => void;
when: (stepId: string, render: () => ReactNode) => ReactNode;
}

function useStepper(): StepperState;
```

---
storybook_id: components-progressstepper-definestepper-provider--docs
title: "Components/ProgressStepper/defineStepper Provider"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-progressstepper-definestepper-provider--docs"
import_path: "./src/components/ProgressStepper/ProgressStepperProvider.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:10:02.945Z
---

# Source: Components/ProgressStepper/defineStepper Provider

- Storybook ID: `components-progressstepper-definestepper-provider--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-progressstepper-definestepper-provider--docs
- Import path: `./src/components/ProgressStepper/ProgressStepperProvider.mdx`
- Capture status: `extracted`

## The defineStepper function creates a custom provider component for managing stepper state. This provider makes step data and navigation methods available to child components through the useStepper hook.

## Basic Usage

```
import { defineStepper, ProgressStepperNav, useStepper } from "@sanofi-accelerator/elements";

// Define your steps
const steps = [
{ id: "step1", label: "Getting Started", description: "Welcome to the wizard" },
{ id: "step2", label: "Configuration", description: "Set up your preferences" },
{ id: "step3", label: "Complete", description: "Finish setup" },
] as const;

// Create the provider
const StepperProvider = defineStepper(steps);

// Use the provider
function App() {
return (

<StepperProvider>
<ProgressStepperNav />
<StepContent />
</StepperProvider>
); }
```

## Function Signature

```
function defineStepper(steps: Step[]): ComponentType<StepperProviderProps>

interface Step {
id: string;
label: string;
description?: string;
}

interface StepperProviderProps {
children: ReactNode;
initialStep?: string;
}
```

## Parameters

### steps: Step[]

An array of step objects that define the stepper flow. Each step must have:

- id (required): A unique identifier for the step
- label (required): The display name of the step
- description (optional): Additional descriptive text for the step

```
const steps = [
{
  id: "account",
  label: "Account",
  description: "Create your account"
},
{
  id: "profile",
  label: "Profile",
  description: "Complete your profile"
},
{
  id: "preferences",
  label: "Preferences",
  description: "Set your preferences"
},
] as const;

const StepperProvider = defineStepper(steps);
```

## Provider Props

The returned provider component accepts the following props:

### children: ReactNode

The child components that will have access to the stepper context.

### initialStep?: string

The ID of the step to start on. If not provided, defaults to the first step in the array.

```
// Start at the first step (default)
<StepperProvider>
<MyComponent />
</StepperProvider>

// Start at a specific step

<StepperProvider initialStep="profile">
<MyComponent />
</StepperProvider>
```

## Multiple Steppers

You can create multiple independent steppers in the same application by calling defineStepper multiple times:

```
// Onboarding stepper
const onboardingSteps = [
{ id: "welcome", label: "Welcome" },
{ id: "setup", label: "Setup" },
{ id: "done", label: "Done" },
];
const OnboardingProvider = defineStepper(onboardingSteps);

// Checkout stepper
const checkoutSteps = [
{ id: "cart", label: "Cart" },
{ id: "shipping", label: "Shipping" },
{ id: "payment", label: "Payment" },
{ id: "confirmation", label: "Confirmation" },
];
const CheckoutProvider = defineStepper(checkoutSteps);

// Use them independently
function App() {
return (

<div>
<OnboardingProvider>
<OnboardingFlow />
</OnboardingProvider>

    <CheckoutProvider>
      <CheckoutFlow />
    </CheckoutProvider>
  </div>

);
}
```

## Complete Example

```
import { defineStepper, ProgressStepperNav, useStepper } from "@sanofi-accelerator/elements";

// 1. Define steps
const stepsExample = [
{ id: "personal", label: "Personal Info", description: "Tell us about yourself" },
{ id: "address", label: "Address", description: "Where do you live?" },
{ id: "payment", label: "Payment", description: "Payment information" },
{ id: "review", label: "Review", description: "Review your information" },
] as const;

// 2. Create provider
const StepperProvider = defineStepper(stepsExample);

// 3. Create step content component
function FormContent() {
const { current, next, previous, steps } = useStepper<typeof stepsExample>();

const currentIndex = steps.findIndex(s => s.id === current);
const isFirst = currentIndex === 0;
const isLast = currentIndex === steps.length - 1;

return (

<div>
<ProgressStepperNav />

    <div className="form-content">
      {current === "personal" && <PersonalInfoForm />}
      {current === "address" && <AddressForm />}
      {current === "payment" && <PaymentForm />}
      {current === "review" && <ReviewSummary />}
    </div>

    <div className="navigation">
      <button onClick={previous} disabled={isFirst}>
        Back
      </button>

      {isLast ? (
        <button onClick={handleSubmit}>
          Submit
        </button>
      ) : (
        <button onClick={next}>
          Continue
        </button>
      )}
    </div>
  </div>

);
}

// 4. Wrap with provider
function App() {
return (

<StepperProvider initialStep="personal">
<FormContent />
</StepperProvider>
); }
```

## How It Works

The defineStepper function:

1. Takes an array of steps as input
2. Returns a React component (provider) that manages the stepper state
3. Uses React Context to make state available to child components
4. Provides navigation methods (next, previous, goTo) that update the current step
5. Ensures the current step is always valid (within the steps array)

The provider component internally:

- Uses useState to track the current step
- Uses useMemo to optimize navigation functions
- Provides all stepper data through StepperContext

## Best Practices

1. Define steps once: Create your steps array and provider at the module level, not inside components
// ✅ Good - defined once at module level
const steps = [...] as const;
const StepperProvider = defineStepper(steps);

// ❌ Bad - recreated on every render
function MyComponent() {
const steps = [...] as const;
const StepperProvider = defineStepper(steps);
return <StepperProvider>...</StepperProvider>;
}
2. Use unique IDs: Ensure each step has a unique ID for proper navigation
3. Provide meaningful labels: Use clear, concise labels that describe each step
4. Optional descriptions: Include descriptions to provide additional context to users
5. Set initial step wisely: Use initialStep when you need to resume a process or skip to a specific step

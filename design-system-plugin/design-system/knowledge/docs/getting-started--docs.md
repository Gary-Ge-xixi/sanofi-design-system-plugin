---
storybook_id: getting-started--docs
title: "Getting Started"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/getting-started--docs"
import_path: "./src/docs/0-getting-started.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:12:40.640Z
---

# Source: Getting Started

- Storybook ID: `getting-started--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/getting-started--docs
- Import path: `./src/docs/0-getting-started.mdx`
- Capture status: `extracted`

# Getting Started

This is a technical guide to help you get started with the Elements Design System. It includes instructions on how to install the library and how to use it in your project.

## Pre-requisites

To use the Elements Design System, you need to have a React application that can consume JavaScript modules. We recommend using TypeScript, as it allows for a much better experience.

Your project should include a npmrc file as the library is published only in an internal repository (currently Github Package).
You should not commit the token as this would allow other users to impersonate you.

```
@sanofi-accelerator:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NPM_TOKEN}
```

You need to use a GitHub token with a valid permission (access to packages as a read) to pull the library on your computer.
To create your token you have to

- Check the token page on GitHub
- On the top right click on Generate new token
- Choose classic token as fine-grained may not be allowed in your organization
- Your token should have read:packages as permission
- Generate your token
- Configure SSO for your token and authorize it for your organization

> One good practice would be to setup your npm auth token part of your npm configuration and not inside each project.

## Installation

You can install Elements via npm or Yarn by running:

```
npm install @sanofi-accelerator/elements
```

or

```
yarn add @sanofi-accelerator/elements
```

The current version is on the v3 branch (v3.x to be precise - and is the default branch) but the package is published using tags and semver on GitHub packages.
You can find all the releases following this link.

The previous versions (below v3) and packages (foundation and elements-react) are deprecated and won't receive new updates, including security, fixes, or features.

## Usage

### CSS Loading - Automatic from v1.1.0+ ⭐

Starting from version 1.1.0, the Elements Design System automatically loads CSS when you import components - no manual CSS imports are required!

```
// ✅ This is ALL you need from v1.1.0+:
import { Button } from "@sanofi-accelerator/elements";

// CSS is automatically loaded! ✨
```

### Backward Compatibility

For backward compatibility, you can still import the CSS file if your project already does:

```
@import "@sanofi-accelerator/elements/styles.css";
```

Important notes:

- ✅ Keeping this import is safe - it won't cause any issues or duplicate styles
- ✅ Removing this import is safe - automatic CSS injection handles everything
- ✅ No breaking changes - existing projects continue to work without modification

The styles.css export is maintained to prevent build errors in existing projects, but it's no longer necessary for functionality.

### How Automatic CSS Works

The library uses advanced tree-shaking with automatic CSS injection:

- ✅ Zero CSS setup - no manual imports needed (from v1.1.0+)
- ✅ Optimal performance - only CSS for imported components is loaded
- ✅ Automatic tree-shaking - unused components won't bloat your bundle
- ✅ Component-specific CSS - each component loads only its required styles

### Component Import & Usage

To use the Elements Design System in your project, you need to import the components you want to use. For example, to use the Button component, you can import it like this:

```
import { Button } from "@sanofi-accelerator/elements";
```

You can then use the Button component in your JSX like this:

```
<Button label="Click me" />
```

See the Button component for more information on how to use it.

### Multiple Components

You can import multiple components in a single import statement:

```
import { Button, Card, Modal } from "@sanofi-accelerator/elements";
```

Each component's CSS will be automatically loaded only when needed, ensuring optimal bundle size.

### Performance Benefits

Thanks to our tree-shaking implementation:

- Small bundles: Import 1 component = ~10-15KB (instead of 200KB+)
- Fast loading: Only the components you use are included
- Automatic optimization: No manual configuration required

For technical details about our tree-shaking implementation, see the Tree-Shaking Documentation.

## Migration Guide

### Upgrading from v1.0.x to v1.1.0+

No action required! Your existing code continues to work:

```
// ✅ Still works (existing projects)
import "@sanofi-accelerator/elements/styles.css";
import { Button } from "@sanofi-accelerator/elements";

// ✅ Also works (new approach, recommended)
import { Button } from "@sanofi-accelerator/elements";
```

### For New Projects

Simply import components directly - automatic CSS injection handles the rest:

```
import { Button, Card, Modal } from "@sanofi-accelerator/elements";
```

## TypeScript Configuration (Optional Performance Optimization)

For optimal bundle performance, especially with the Icon component, you can configure your TypeScript project to enable const enum inlining:

```
// tsconfig.json
{
  "compilerOptions": {
    "preserveConstEnums": false,
    "isolatedModules": false
    // ... your other options
  }
}
```

This enables const enum inlining, which reduces the Icon component bundle size by ~99% (from 200KB to 2-5KB).

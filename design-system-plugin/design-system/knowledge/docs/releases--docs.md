---
storybook_id: releases--docs
title: "Releases"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/releases--docs"
import_path: "./src/docs/7-releases.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:13:09.622Z
---

# Source: Releases

- Storybook ID: `releases--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/releases--docs
- Import path: `./src/docs/7-releases.mdx`
- Capture status: `extracted`

# Changelog

All notable changes to the Elements Design System are documented here. Each release follows semantic versioning.

You can also find all published packages on GitHub Packages.

## v3.46.0 (2026-04-09)

### Features

- Card: add tags and secondary eyebrows to Card component (CXEDS-2777)

## v3.45.2 (2026-04-09)

### Features

- Icon: add new icons (DASHBOARD_2_GEAR, EDIT_SQUARE, LEFT_PANEL_CLOSE, LEFT_PANEL_OPEN, STORAGE)

### Bug Fixes

- Autocomplete: fix Autocomplete behavior inside Drawer component
- Footer: fix social icons color

### Maintenance

- Update @sanofi-accelerator/elements-icons package
- Add script to sync icons enum on install

## v3.45.1 (2026-04-07)

### Bug Fixes

- Tooltip: only update Tooltip when open (CXEDS-2858)
- Card: make Card border-radius respect hasBorder prop (CXEDS-2829)
- Icon: add social icons in elements (CXEDS-2799)
- Checkbox: fix icon display
- Rename subset font to avoid Google Fonts conflict and fix darkmode

### Maintenance

- Bump vite from 7.3.1 to 7.3.2
- Add addon storybook performance

### Documentation

- ADR synchronisation (CXEDS-2747)

## v3.45.0 (2026-04-04)

### Features

- Icon: add elements-icons package (CXEDS-2748)

### Security

- Bump skott to 0.35.9 to resolve effect CVE-2026-32887
- Override lodash/lodash-es to 4.18.1 to resolve CVE in vite-plugin-dts dependency chain

## v3.44.0 (2026-04-01)

### Features

- Stepper: add neutral variant (CXEDS-2834)
- Tooltip: add capturePointer prop for scrollable interactions

### Bug Fixes

- Stepper: fix color in dark mode (CXEDS-2834)
- Fix codeguard issues

### Security

- Patch brace-expansion CVE-2026-33750 (GHSA-f886-m6hf-6m8v)
- Update yaml to patched versions (CVE-2026-33532)

## v3.43.2 (2026-03-25)

### Bug Fixes

- Avatar: update Avatar component styles
- Hero: call video.load() after responsive source switch on non-HLS videos
- Hero: merge source-reload and play/pause effects into one
- Fix circular-dependencies issue

## v3.43.1 (2026-03-21)

### Features

- Design Tokens: update tokens (CXEDS-2815)

### Bug Fixes

- Fix Vite configuration
- Fix security vulnerability

### Documentation

- AI readiness improvements

## v3.43.0 (2026-03-19)

### Features

- Sidebar: make sidebar controllable and fully collapsible (CXEDS-2775)
- ContentBlock: add ContentBlock component (CXEDS-2771)
- ChipDropdown: enhance ChipDropdown with new modes and status item support (CXEDS-2770)
- Select: add option descriptions and custom rendering support (CXEDS-2758)

### Bug Fixes

- Hero: fix title Hero props issue (CXEDS-2802)

### Documentation

- AI readiness improvements (CXEDS-2816)

## v3.42.3 (2026-03-14)

### Bug Fixes

- Button: fix tertiary destruct updates (CXEDS-2750)
- Link: fix standalone link issue (CXEDS-2749)
- Tooltip: delay prop accepts open/close object (CXEDS-2779)

## v3.42.2 (2026-03-11)

### Bug Fixes

- Accordion: fix accordion issue (CXEDS-2769)

## v3.42.1 (2026-03-06)

### Bug Fixes

- Carousel: fix issue on the last slide part 2 (CXEDS-2762)

## v3.42.0 (2026-03-06)

### Bug Fixes

- Carousel: fix issue on the last slide (CXEDS-2762)

### Documentation

- Add llms.txt for AI-assisted development context (CXEDS-2759)
- Improve JSDoc and add Claude Code rules (CXEDS-2752)
- Update tables (CXEDS-2734)

## v3.41.0 (2026-03-02)

### Features

- TreeView: add TreeView component (CXEDS-2700)

### Bug Fixes

- TextArea: fix filled icon (CXEDS-2741)

## v3.40.0 (2026-02-27)

### Features

- Typography/Title: add fontWeight prop (CXEDS-2722)
- OKLCH scale refactoring for design tokens (CXEDS-2698)

### Bug Fixes

- Button: update token for disabled state (CXEDS-2742)
- Hero: card inside Hero is not centered vertically (CXEDS-2735)
- Hero: manage props media (CXEDS-2735)
- Tabs: improve tab with navigation behavior (CXEDS-2671)
- Menu: use element.props.ref for React 19 compatibility
- Dark Mode: fix dark mode issues (CXEDS-2689)

### Documentation

- Added dark mode and elevation tokens

## v3.39.0 (2026-02-20)

### Features

- Hero: add video support and full screen option (CXEDS-2704)
- Tag: create Tag component (CXEDS-2696)

## v3.38.1 (2026-02-18)

### Bug Fixes

- FileUploader: use right token for upload icon (CXEDS-2701)
- Revert moving fonts/icons to CDN

## v3.38.0 (2026-02-06)

### Features

- Flex: add Flex, Slot and Slottable components
- Flex: add missing flex properties and update Storybook doc (CXEDS-2694)
- Tabs: add lazyMount and unmountOnHide props (CXEDS-2674)

### Bug Fixes

- Drawer: enhance Drawer component with Autocomplete support
- Menu: fix keyboard navigation
- Design Tokens: add font weight mapping for normalization (CXEDS-2642)

## v3.37.0 (2026-01-30)

### Features

- Icon: move fonts/icons to CDN (CXEDS-2610)
- Slot: add Slot component and update index exports

## v3.36.0 (2026-01-26)

### Features

- ProgressBar: add text value to replace the percentage value
- Drawer: add showHeader and showFooter props

### Bug Fixes

- Fix loading font issue
- Select: enhance onChange logic to prevent unnecessary triggers when values are equal

## v3.35.0 (2026-01-16)

### Features

- ChipStatus: add innerTextTag prop to allow custom HTML tag for Typography
- Autocomplete: add showAllOptionsOnOpen prop
- Autocomplete: add onFocus and onClick handlers for improved cursor management

### Bug Fixes

- Sidebar: use LayoutEffect for Next.js projects to remove flicker issue
- DatePicker: enhance RangeDatePicker to keep calendar open when selecting same start and end date (CXEDS-2579)
- Checkbox: apply check animations only after user interaction (CXEDS-2609)
- Ensure pointer events are enabled for menu trigger container

## v3.34.0 (2026-01-08)

### Features

- DatePicker: create datepicker footer (CXEDS-2335)

### Bug Fixes

- ChipFilter: fix keyboard navigation (CXEDS-2611)
- ChipDropdown: fix custom value not displayed when options is empty with multiple true (CXEDS-2597)
- Autocomplete: fix dark mode on expand icon button
- Fix calendar display inside Drawer
- Include react-aria and floating-ui into build to resolve build errors on projects using yarn

## v3.33.0 (2025-12-02)

### Features

- NavigationHeader: handle dynamic items when resizing (CXEDS-2465)
- ButtonIcon: update icon size (CXEDS-2540)
- Design Tokens: DTCG Standardized tokens (CXEDS-2460)

### Bug Fixes

- Modal: add focus trap and Escape key handling for accessibility
- Menu: fix alignment of menu icons (CXEDS-2404)
- NavigationHeader: justify-start logo when no burger menu in mobile

## v3.32.0 (2025-11-25)

### Features

- FileUploader: add FileUploader component (CXEDS-2187)
- AvatarGroup: create Avatar Group component (CXEDS-1361)

### Bug Fixes

- Radio: prevent radio button circle from shrinking (CXEDS-2521)
- ChipDropdown: fix missing aria-label (CXEDS-2513)
- NavigationHeader: resolve circular dependencies
- Fix icon enum update

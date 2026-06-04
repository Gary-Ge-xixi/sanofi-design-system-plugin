---
storybook_id: foundations-motion--docs
title: "Foundations/Motion"
name: "Docs"
source_url: "https://elements.sanofidesign.com/557b0250b/p/07bcd8-motion"
import_path: "zeroheight:557b0250b/p/07bcd8-motion"
capture_tool: defuddle/curl
capture_status: token-only-local
captured_at: 2026-06-03T20:10:00+08:00
---

# Source: Foundations/Motion

- Storybook ID: `foundations-motion--docs`
- Source URL: https://elements.sanofidesign.com/557b0250b/p/07bcd8-motion
- Capture status: `token-only-local`

The external Zeroheight Motion page could not be extracted through the unauthenticated local capture path. The local HTML generation workflow must therefore use only the executable motion tokens already present in:

- `design-system/tokens/tokens.css`
- `design-system/tokens/token-allowlist.txt`

Do not invent additional motion principles, durations, easings, choreography, or animation behavior until the authenticated Motion foundation page is captured and this file is refreshed.

## Duration Tokens

```css
--elements-motion-duration-75: 75ms;
--elements-motion-duration-150: .15s;
--elements-motion-duration-300: .3s;
--elements-motion-duration-500: .5s;
--elements-motion-duration-750: .75s;
--elements-motion-duration-1000: 1s;
--elements-motion-duration-1500: 1.5s;
--elements-motion-duration-2500: 2.5s;
```

## Easing Tokens

```css
--elements-motion-ease-linear: linear;
--elements-motion-ease-in: cubic-bezier(1, 0, .8, 1);
--elements-motion-ease-out: cubic-bezier(.2, 0, 0, 1);
--elements-motion-ease-in-out: cubic-bezier(.8, 0, .2, 1);
--elements-motion-ease-in-bounce: cubic-bezier(.6, -.28, .73, .04);
--elements-motion-ease-out-bounce: cubic-bezier(.17, .89, .32, 1.27);
--elements-motion-ease-in-out-bounce: cubic-bezier(.68, -.55, .27, 1.55);
```

## Local Generation Rules

- Use token references for transitions and animations.
- Do not hard-code transition durations or cubic-bezier values in generated HTML.
- Use short durations for direct operational feedback in admin pages.
- Treat bounce easings as expressive motion and avoid them in dense data-entry workflows unless a component contract explicitly requires them.
